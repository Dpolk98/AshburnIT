export function Card() {
    // const topic = ['Data', 'Commercial', 'Web', 'Contact'];
    const topic = ['Data', 'Industry', 'Commercial', 'Get Fucked'];

    return (

        <div class="container">
            {topic.map((cardTitle, topicDesc) => (
            <div class='card'>
                <h3>{cardTitle}</h3>
                <p>{topicDesc}</p>
            </div>
            ))}
        </div>
    )
};