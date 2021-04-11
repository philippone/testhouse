import locations from '../_data/locations.json';

function form() {
    return {
        postal: 66119,
        locations: [...locations],
        onSearch: function (event: Event): void  {
            event.preventDefault();
            // @ts-ignore
            const postal = event.target.postal.value;
            this.locations = locations.filter(location => location.postal === postal);
        },

    }
};

// @ts-ignore
window.form = form;