
function Card() {

    // const dataContent = ['Cabling Infrastructure', 'Cleaning', 'Computer Maintenance', 'Safety', 'Consultations'];
    
    // const residentialContent = ['Cable Installs', 'Wifi Troubleshooting', 'Wifi Improvement', 'Green Energy', 'Computer Repair','Computer Assembly', 'Consultations'];

    // const commerceContent = ['Cable Installs', 'Computer Repair', 'Compurter Troubleshooting', 'Networking', 'Safety Inspections', 'Consultations']; 

    // const webContent = ['Website Development', 'Search Engine Optimization', 'Brand Development', 'Marketing'];
    
    return (
        <div className='cardContainer'>

            <div className='summaryCard'>
                <h3 className='dataCardLink'>Data Centers</h3>
                <p className='dataCardContent'>Cabling Infrastructure</p>
                <p>Cleaning</p>
                <p>Computer Maintenance</p>
                <p>Safety</p>
                <p>Consultations</p>
            </div>

            <div className='summaryCard'>
                <h3 className='commerceCardLink'>Commercial</h3>
                <p>Cable Installs</p>
                <p>Computer Repair</p>
                <p>Computer Troubleshooting</p>
                <p>Networking</p>
                <p>Safety Inspections</p>
                <p>Consultations</p>
            </div>

            <div className='summaryCard'>
                <h3 className='webCardLink'>Web Solutions</h3>
                <p>Website Development</p>
                <p>Search Engine Optimization</p>
                <p>Brand Development</p>
                <p>Marketing</p>
            </div>

            <div className='summaryCard'>
                <h3 className='residentCardLink'>Residential</h3>
                <p>Cable Installs</p>
                <p>Wifi Toubleshooting</p>
                <p>Wifi Improvement</p>
                <p>Green Energy</p>
                <p>Computer Repair</p>
                <p>Computer Assembly</p>
                <p>Consultations</p>
            </div>

        </div>
    )
};



export { Card };