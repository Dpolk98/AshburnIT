import logo  from '../assets/logo.svg';

export function Nav() {
    const linkStyle = {  };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingLeft: '5em',
                    paddingRight: '5em',
                }}
            >
                <div style={linkStyle}>
                    <svg href='#home' src= { logo }/>
                </div>
                <div style={linkStyle}>
                    <h2 href='#dataCenters'>Data Centers</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#commercial'>Commercial</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#webSolutions'>Web Solutions</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#contact'>Contact</h2>
                </div>
            </section>
        </nav>
    );
}