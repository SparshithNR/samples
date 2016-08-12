import hello from './hello';
import jquery from "jquery";
import stache from "can/view/stache/stache";

var template = stache("<hello-world name='{name}'> </hello-world>");
$("#app").html(template({
	name: 'world'
}));