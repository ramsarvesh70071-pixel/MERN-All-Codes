function ProgressCard({skill}){
    return(
        <>
            <div>
                <h2>{skill.name}</h2>
                <div className="progress bg-secondary mb-3">
                    <div
                        className={`progress-bar ${skill.color}`}
                        style={{ width: skill.percentage }}
                    >
                        {skill.percentage}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressCard;