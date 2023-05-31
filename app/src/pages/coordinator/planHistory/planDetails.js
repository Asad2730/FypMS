import { Fragment } from 'react'
import { useLocation } from "react-router-dom";

const locations = [
    {
        name: 'Edinburgh',
        people: [
            { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
            { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
        ],
    },
    // More people...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function PlanDetails() {

    const location = useLocation();
    const person = location.state;
    console.log('object', person);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <h1 className='text-xl font-bold'>Evaluation Details</h1>
            </div>
            <div>

            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        {person?.taskPlan?.name
                            ?(<>Name : {person?.taskPlan?.name} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.design
                            ?(<>Design : {person?.taskPlan?.design} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.comments
                            ?(<> Comments : {person?.taskPlan?.comments} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.comments
                            ?(<> Comments : {person?.taskPlan?.comments} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.conformance
                            ?(<> Confermence : {person?.taskPlan?.conformance} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.demonstration
                            ?(<> Demonstration : {person?.taskPlan?.demonstration}</>) :(<></>)
                        }
                        {person?.taskPlan?.presentation
                            ?(<> Presentation : {person?.taskPlan?.presentation} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.performance
                            ?(<> Performance : {person?.taskPlan?.performance} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.progress
                            ?(<> Progress : {person?.taskPlan?.progress} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.system
                            ?(<> System : {person?.taskPlan?.system} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.organization
                            ?(<> Organization : {person?.taskPlan?.organization} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.remarks
                            ?(<> Remarks : {person?.taskPlan?.remarks} <br /></>) :(<></>)
                        }
                        {person?.taskPlan?.range
                            ?(<> Range : {person?.taskPlan?.range}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.progress
                            ?(<> Progress : {person?.taskPlan?.progress}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.presentation
                            ?(<> Presentation : {person?.taskPlan?.presentation}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.performance
                            ?(<> Performance : {person?.taskPlan?.performance}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.organization
                            ?(<> Organization : {person?.taskPlan?.organization}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.innovation
                            ?(<> Innovation : {person?.taskPlan?.innovation}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.domain
                            ?(<> Domain : {person?.taskPlan?.domain}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.design
                            ?(<> Design : {person?.taskPlan?.design}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.demonstration
                            ?(<> Demonstration : {person?.taskPlan?.demonstration}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.conformance
                            ?(<> Confermence : {person?.taskPlan?.conformance}<br /></>) :(<></>)
                        }
                        {person?.taskPlan?.comments
                            ?(<> Comments : {person?.taskPlan?.comments}<br /></>) :(<></>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
