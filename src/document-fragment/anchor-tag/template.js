const template = `
<a href="javascript:;" onclick="clickHandler(event)">anchor</a>
`

function clickHandler($event) {
    console.log('Anchor clicked', $event)
}