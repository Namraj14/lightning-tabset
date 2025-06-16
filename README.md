## 🔖 lightning-tabset in Salesforce LWC

### 📘 What is `<lightning-tabset>`?

A `<lightning-tabset>` displays a tabbed container with multiple content areas, only one of which is visible at a time. Tabs are displayed horizontally in a row, with the selected tab’s content shown below it by default.

Use tabsets to separate information into logical sections based on functionality or use case, making complex layouts easier to navigate and understand.

A `<lightning-tabset>` can contain multiple `<lightning-tab>` components as its body. Each tab defines a unique section of content that users can switch between.

### 🧩 Attributes Used

| Attribute           | Description |
|---------------------|-------------|
| `variant`           | Defines the styling of the tabset. Accepts `"standard"` (default, underlined tabs) and `"scoped"` (tabs inside a bordered container). |
| `active-tab-value`  | Specifies which tab should be active when the component loads. The value must match one of the tab's `value` attributes. |
| `onactive`          | Event handler that is triggered when the user selects a different tab. Use this to capture and react to tab changes. |

### 🧩 `<lightning-tab>` Attribute

| Attribute | Description |
|-----------|-------------|
| `label`   | The text displayed on the tab. |
| `value`   | A unique identifier for the tab. This is used in conjunction with `active-tab-value` and `onactive`. |

### ✅ Example

```html
<lightning-tabset variant="scoped" active-tab-value="profile" onactive={handleTabChange}>
    <lightning-tab label="Profile" value="profile">
        <p>Profile content here</p>
    </lightning-tab>
    <lightning-tab label="Settings" value="settings">
        <p>Settings content here</p>
    </lightning-tab>
</lightning-tabset>

### 📌 In this example:

- `"profile"` is the default selected tab, controlled using the `active-tab-value` attribute.
- When a user switches tabs, the `onactive` event is triggered to capture the change.
- The tabset uses the `"scoped"` variant to display tabs inside a bordered container for better visual separation.
