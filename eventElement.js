class EventElement {
    
    /**
     * Represents a element in the DOM.
     * @constructor
     * @param {string} elementIdentification - the identifier of the DOM element
     * @param {string} type - event listener type
     * @param {function(Element, Promise, UKMOnePage): void} doFunction - function that contains code specific to the context. Example: code to remove a DOM element
     * @param {string} url - url to be called after the event is triggered. It is used to identify where the call should be made
     * @param {string} ajaxMethod - GET, POST, PATCH, DELETE
     * @param {string[]} data - data will be fetched from the element defined as 'e' or the event element. The data most be defined as attributes of the DOM element
     * @return {void}
     * 
     */
    constructor(elementIdentification, type, doFunction, url, ajaxMethod, data) {
        this.elementIdentification = elementIdentification;
        this.type = type;
        this.doFunction = doFunction;
        this.url = url;
        this.ajaxMethod = ajaxMethod;
        this.data = data;
        

        // Call this when the event is triggered
        this.callback = null;
        this.ukmOnePage = null;

    }

    /**
     * Sets the callback function to be called on event trigger
     * @method
     * @param {function(Element, Array)} callback - function that contains code to be executed on trigger. Example: execute ajax call
     * @return {void}
     */
    setCallback(callback) {
        this.callback = callback;
    }

    initEvent() {
        $(this.elementIdentification).on(this.type, (e) => {
            var data = {}

            for(var d of this.data) {
                data[d] = $(e.currentTarget).attr(d);
            }

            console.log(this);
            console.log('aaa');
            this.callback(e, data);
        });
    }

}