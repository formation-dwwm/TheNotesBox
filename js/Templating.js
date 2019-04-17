function fromTemplate(templateId, data, options){
    // Get template from DOM
    const $template = document.getElementById(templateId);

    const opts = {
        tagName: "div",
        attrs: {},
        ...options
    }

    if(!$template){
        throw new Error("Template not found, please check given ID");
    }

    // Fetch html template
    let htmlTemplate = $template.innerHTML;


    // Create base element with tagName and optionnal attributes defined in options
    const $el = document.createElement(opts.tagName);
    Object.keys(opts.attrs).map(key => {
        const value = opts.attrs[key];
        $el.setAttribute(key, value);
    });

    const regx = /\{\{([\s\S]*?)\}\}/g;

    // Replace every occurence of data binding via {{ key }} blocks with data[key]
    const templated = htmlTemplate.replace(regx, function(occurence, capture){
        let key = capture.trim();
        let value = data[key];
        if(value){
            return value;
        }
        return occurence;
    });

    // Set our new element inner HTML
    $el.innerHTML = templated;

    // Return our new element
    return $el;
}