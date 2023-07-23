const Durvesh = ({ children }) => { 
    return (
        <button>
            {children} 
        </button>
    );
};

const ChildrenProp = () => {
    return (
        <div>
            <Durvesh>Login</Durvesh> 
        </div>
    );
};
export default ChildrenProp