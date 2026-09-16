import React from 'react';
export default function WhyRarite(){
    const features=[
        {
            id: 1,
            title: "Evidence-Based Formulations",
            description: "Every ingredient selected with purpose,baked by clinical research and rigor."
        },
        {
            id: 2,
            title: "Pharmacist Curated",
            description:"Bridging pharmaceutical expertise with skin physiology for real, targeted efficacy."

        },
        {
            id: 3,
            title: "Premium Biotech Standards",
            description: "Clean , high-performance active delivered with copmutational precision."
        }
    ];
    return<>
    <section className="why-rarite-section py-5">
        <div className="container">
            <h2 className='text-center mb-5'>Why Rarité?</h2>
            <div className='row g-4'>
                {features.map((feature) => (
                    <div key={feature.id} className='col-md-4'>
                        <div classNmae="card h-100 p-4 border-0 shadow-sm">
                            <h3 classNmae="h5 mb-3">{feature.title}</h3>
                            <p classNmae="text-muted mb-0">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
   
    </>
}