export default { title: 'Dialog' };

export const full = () => `
<div aria-labelledby="dialog-title" aria-modal="true" class="dialog" id="dialog" role="dialog">
    <div class="dialog__window dialog__window--full">
        <div class="dialog__header">
            <button class="dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
            <h2 id="dialog-title">Dialog Full</h2>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

export const fullWithFooter = () => `
<div aria-labelledby="dialog-title" aria-modal="true" class="dialog" id="dialog" role="dialog">
    <div class="dialog__window dialog__window--full">
        <div class="dialog__header">
            <h2 id="dialog-title">Dialog Full (With footer)</h2>
            <button class="dialog__close" type="button" aria-label="Close Dialog">
                <svg class="icon icon--close" aria-hidden="true">
                    <use xlink:href="#icon-close"></use>
                </svg>
            </button>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
        <div class="dialog__footer">
            <button class="btn">Cancel</button>
            <button class="btn btn--primary">Submit</button>
        </div>
    </div>
</div>
`;

export const multistep = () => `
<div aria-labelledby="dialog-title" aria-modal="true" class="dialog" id="dialog" role="dialog">
    <div class="dialog__window dialog__window--full" role="document">
        <div class="dialog__header">
        <button class="dialog__back" type="button" aria-label="Back">
            <svg class="icon icon--back" aria-hidden="true">
                <use xlink:href="#icon-back"></use>
            </svg>
        </button>
            <h2 id="dialog-title">Multi-Step</h2>
        <button class="dialog__close" type="button">Done</button>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

multistep.story = {
    name: 'Multistep (DS4 only)'
}

export const subpage = () => `
<div aria-labelledby="dialog-title" aria-modal="true" class="dialog" id="dialog" role="dialog">
    <div class="dialog__window dialog__window--full" role="document">
        <div class="dialog__header">
            <button class="dialog__back" type="button" aria-label="Back">
                <svg class="icon icon--back" aria-hidden="true">
                    <use xlink:href="#icon-back"></use>
                </svg>
            </button>
            <h2 id="dialog-title">Sub Page</h2>
        </div>
        <div class="dialog__main">
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
            <h3>Heading</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis molestie erat, ut adipiscing risus blandit vel. Vivamus luctus elementum lorem, eu sodales velit sagittis id.</p>
            <p><a href="http://www.ebay.com">www.ebay.com</a></p>
        </div>
    </div>
</div>
`;

subpage.story = {
    name: 'Subpage (DS4 only)'
}
