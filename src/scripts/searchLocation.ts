import locations from '../_data/locations.json';
import {TestLocation} from "../scripts-bundled/interfaces/testLocation.interface";

function onSearch (event: Event, thisArg: any): void {
    if (event) {
        event.preventDefault();
    }

    console.log('onSearch');

    if (!thisArg.postal || thisArg.postal === '') {
        thisArg.locations = [...locations];

        if (window.history.pushState) {
            const url = new URL(window.location.href);
            // set search property to blank
            url.search = '';
            window.history.pushState({path: url.toString()}, '', url.toString());
        }
    } else {


        thisArg.locations = locations.filter(location => location.postal === thisArg.postal);

        if (window.history.pushState) {
            const url = new URL(window.location.href);

            url.searchParams.set('search', thisArg.postal);
            window.history.pushState({path: url.toString()}, '', url.toString());
        }
    }
}

function form(): {postal: string, onSearch: (event:  Event | null) => Array<TestLocation>, locations: Array<TestLocation>} {


    const o =
     {
        postal: new URL(window.location.href).searchParams.get('search') || '',

        onSearch: function (event: Event | null): Array<TestLocation> {
            if (event) {
                event.preventDefault();
            }

            console.log('onSearch');

            if (!this.postal || this.postal === '') {
                this.locations = [...locations];

                if (window.history.pushState) {
                    const url = new URL(window.location.href);
                    // set search property to blank
                    url.search = '';
                    window.history.pushState({path: url.toString()}, '', url.toString());
                }
            } else {


                this.locations = locations.filter(location => location.postal === this.postal);

                if (window.history.pushState) {
                    const url = new URL(window.location.href);

                    url.searchParams.set('search', this.postal);
                    window.history.pushState({path: url.toString()}, '', url.toString());
                }
            }

            return this.locations;
        },
         locations: [...locations]
    };
    // @ts-ignore
    o.locations = o.onSearch(null);

    return o;
};

// @ts-ignore
window.form = form;