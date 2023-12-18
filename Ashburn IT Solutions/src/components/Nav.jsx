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
                    <h1 href='#'>Home</h1>
                </div>
                <div style={linkStyle}>
                    <h2 href='#'>Government</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#'>Contractor</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#'>About</h2>
                </div>
                <div style={linkStyle}>
                    <h2 href='#'>Contact</h2>
                </div>
            </section>
        </nav>
    );
}