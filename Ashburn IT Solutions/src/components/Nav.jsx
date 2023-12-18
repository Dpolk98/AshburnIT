export function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <nav className="main-header-menu">
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <p>test</p>
                <div style={linkStyle}>
                    <a href='#'>Home</a>
                </div>
                <div style={linkStyle}>
                    <a href='#'>Government</a>
                </div>
                <div style={linkStyle}>
                    <a href='#'>Contractor</a>
                </div>
                <div style={linkStyle}>
                    <a href='#'>About</a>
                </div>
                <div style={linkStyle}>
                    <a href='#'>Contact</a>
                </div>
            </section>
        </nav>
    );
}