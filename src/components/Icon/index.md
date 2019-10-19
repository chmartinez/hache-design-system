# Icon

## History

This component "appeared" in my list after my 1st attempt with the [Alert component](../Alert/index.md). The "dismissable" behavior needed for the alert must be done with a separate, reusable component.

### v1 requirements
* It should be one component to render all icons possible (Instead of `<CloseIcon>`, have an `<Icon type="close" />` instead).
* It should render svg
* It should be scaled according to the text size. For example, icons inline with 12pt font should be 12px in size with 8px of spacing.
* It should allow color configuration

