export const myHeaderStyle = {color: "Red", fontSize: "Bold"}

function Header () {

    return (
        <header>
          <h1 style={myHeaderStyle}> Keeper</h1>
        </header>
    );
};

export default Header;
