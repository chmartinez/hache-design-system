# Alert

## History

This component is the 1st one of this design system (from now on, DS). And it was the one that opened my eyes (sort of speak).
I started with this one due to alphabetic reasons (you know, `dashkit` design systems starts from there) but the truth is that this was a really, really poor choice. 
This component is kinda simple and it's a good way of start adding some code to the repo, but for no reason is a good choice to start a design system.
Reason is that the component is not an 'atom' but a 'small molecule' and not one of the most important ones. Also, since I didn't check any of the styling rules defined in the DS, the styles are awful (no consistent and ugly af). 
But hey! Good thing is that, by doing this component, I realized the mistakes I did:
* coding right away without thinking first is a waste of time.
* poor design solutions (is it a "dismissable" option? What's a `variation`?)
* lack of structure while coding (props definition, API, meaning of the component, etc.)

### Todo
- [ ] The `Dismiss` component needs to go. Maybe we need an `Icon` for it?
- [ ] Check the prop drill issue with the `Dismiss` component. Maybe we could handle the `variation` prop with a `Theme Provider`?
