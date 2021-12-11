const Fridge = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('h1', {}, props.address),
        React.createElement('h1', {}, props.contactPerson),


    ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        // React.createElement("h1", {}, "Freedge Finder!!!")
        [
            React.createElement(Fridge, {
                name: "Funky Town",
                address: "Dallas, tX",
                contactPerson: "Ria Cho"
            }
            
            )
        ]
    )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))