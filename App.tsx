import { EnrichedMarkdownText } from "react-native-enriched-markdown";
import { Linking, View } from "react-native";
import { WebView } from "react-native-webview";

const markdown = `
# Welcome to Markdown!

This is a paragraph with **bold**, [Expo link](https://expo.dev), *italic*, and [RN link](https://reactnative.dev).

- List item one
- List item two
  - Nested item

\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`
`;

export default function App() {
  const handleLinkPress = (event: { url: string }) => {
    console.log("Link pressed:", event);
    Linking.openURL(event.url);
  };

  return (
    <View
      style={{
        flex: 1,
        gap: 32,
        margin: 16,
        marginVertical: 64,
      }}
    >
      <EnrichedMarkdownText markdown={markdown} onLinkPress={handleLinkPress} />

      <View style={{ height: 1, backgroundColor: "#000", width: "100%" }} />

      <WebView
        source={{ uri: "https://en.wikipedia.org/wiki/Expo_(Stockhausen)" }}
      />
    </View>
  );
}
