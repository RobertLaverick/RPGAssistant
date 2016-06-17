var commentBox = React.createClass({
    render: function() {
        return (<div className="commentBox">Hello World, I am a CommentBox.</div>);
    }
});

ReactDOM.render(<CommentBox />, document.getElementById('content'));