import $ from "jquery";
import can from "can";
import stache from "can/view/stache/stache";

can.Component.extend({
	tag: "hello-world",
	template: stache("Hello {{name}}")
});