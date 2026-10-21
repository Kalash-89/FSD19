const root = ReactDOM.createRoot(document.getElementById("root"));

const FunctionComponent = () => {
    return (
        <div>
            <h1>Function Component</h1>
        </div>
    );
};

const reactElement = (
    <>
        <FunctionComponent />
        <FunctionComponent></FunctionComponent>
        {FunctionComponent()}
    </>
);

root.render(reactElement);

// root.render(<FunctionComponent />);first method
// root.render(<FunctionComponent></FunctionComponent>);//second method
// root.render(FunctionComponent());//third method