import logo  from '../assets/logo.svg';

function Nav() {
    return (
        <nav className="main-header-menu">
            <section
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    padding: '1em'
                }}>
                    <img src={ logo }/>
                    <h2 style={{
                        paddingLeft:'0.5em'
                    }}> Ashburn IT Solutions</h2>
                </div>
                <div style={{
                    paddingRight:'1em'
                }}>
                    <button>Contact Us</button>
                </div>
            </section>
        </nav>
    );
}

export { Nav }