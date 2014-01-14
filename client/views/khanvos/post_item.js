Template.post_item.helpers({
	submittedText: function() {
		return new Date(this.submitted).toString();
	}
});