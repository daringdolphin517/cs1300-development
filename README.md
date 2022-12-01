# Development

### Link to Deployed Website
If you used the stencil code, this is `https://daringdolphin517.github.io/cs1300-development`

### Goal and Value of the Application
My application allows for a simplified browsing experience of the IKEA catalog. IKEA's website, while more comprehensive, does not allow for quick and easy access to *all* pieces of furniture in a given category -- be it room, style, or color. Users can also save their possible purchase for future reference and research on the IKEA main website. 

### Usability Principles Considered
- My application features a clear layout, with different elements organized and bounded to reflect their functionality. The overall grid layout splits the page into two columns: one for the application controls and one for the smaller grid of results. The controls are bounded by an outline to make it clear where they begin/end. Otherwise, the potential items are organized in a clear three-column grid, with as many rows as necessary to reach the bottom of the page.
- I also hoped to give my application a familiar appearance: sorting features are radio buttons as only one can be selected at once, whereas filtering features are checkboxes as any number can be selected at once.

### Organization of Components
My application has 4 main components: App, Item, Sort, and Filter.
- App is the overarching component which contains the other three. Within App, the left (control) column contains both the Sort and Filter components, while the right (results) component contains a *n* x 3 grid of Item components.

### How Data is Passed Down Through Components
In my application, data is passed down through components with props. Each Item component, for example, is created by using a map function over each of the JSON elements in the ``items`` dataset. After being passed as a list, the Item component can access each key-value pair by referencing ``this.props.<key>`` to get ``<value>``.

### How the User Triggers State Changes
The User can trigger state changes each time any of the buttons, radio buttons, or checkboxes is clicked. Doing so changes the size of the saved items list or the sort/filtering of the current results.

