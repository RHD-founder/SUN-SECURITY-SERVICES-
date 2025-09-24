import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { CheckIcon } from "@heroicons/react/24/solid"
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

// Helper list renderer
function TipsList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-4 mt-2">
            {items.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-6 h-6 border-2 border-[#8B0000] rounded-sm bg-white flex items-center justify-center shrink-0">
                        <CheckIcon className="w-4 h-4 text-[#8B0000]" />
                    </div>
                    <p className="flex-1 text-[#556B2F] text-justify leading-relaxed">{tip}</p>
                </li>
            ))}
        </ul>
    )
}

export default function SecurityTipsPage() {
    const personalSafetyTips = [
        "Be aware of your surroundings: Stay alert and mindful of people and situations around you, especially in unfamiliar or poorly lit areas. Limit distractions like excessive phone use. There are reports of an increase in snatching of electronic devices from individuals who carry their smartphone in their hands and not paying attention to their surroundings, listening to music, or even texting while walking.",
        "Trust your instincts: If a situation or person makes you feel uncomfortable, remove yourself from the situation immediately.",
        "If you are walking, walk wisely, walk with friends or in well-lit, populated areas whenever possible.",
        "Avoid walking alone at night and do not use shortcuts through deserted or dark areas.",
        "While walking, keep close to the curb. Avoid doorways, bushes or alleys where someone could possibly hide.",
        "Walk confidently at a steady pace, make eye contact with people when walking. Do not respond to any conversation from strangers on the street; continue walking confidently.",
        "While walking in a public place do not use or wear anything that will impede your vision or hearing like earphones etc.",
        "When travelling, don't talk to strangers or accept eatables from them.",
        "When using public transport, avoid deserted terminals, wait in well-lit areas, and be aware of suspicious individuals.",
        "Be confident: Carry yourself with confidence, even if you don't feel it.",
        "Don't display valuables, avoid showing off cash, expensive jewellery, or devices that could attract attention. Keep your mobile phones or other valuables in secure pockets.",
        "Don't hesitate to ask for help, if you feel threatened, don't hesitate to ask for help from a security guard or any policemen nearby.",
        "If you are alone and working late in office, keep the office door locked.",
        "If you are in the elevator with another person, stand near the control panel. If you are attacked, press the alarm button and as many of the buttons as possible.",
        "If you think someone is following you, change direction or cross the street. If they're still there, move quickly toward an open store, restaurant or any nearby place with a gathering of people. Don't be shy or afraid to yell for help.",
        "Report any suspicious person or activity to the proper authorities like building security or manager or any policemen in view.",
        "Be aware of the emergency exits or escape routes in the building.",
        "If walking on the main road, walk on that side of the road where you can see the traffic approaching you from front and not from behind.",
        "Wear reflective clothing so that drivers can see you as you cross the street.",
    ]

    const carSafetyTips = [
        "Lock your doors immediately after entering or leaving your car.",
        "Park in safe areas, making sure there is adequate lighting and that your car is in public view. When you park, look around for suspicious persons or vehicles near your car.",
        "Don’t carry too many things in your arms going to and from the vehicle.",
        "Have your car keys in your hand so you don’t have to linger before entering your car.",
        "Check the back seat before entering your car.",
        "Don’t linger in your car (reading, eating, napping, etc.).",
        "If you have to wait in your car, keep the windows rolled up more than halfway.",
        "Don’t leave any valuables inside the vehicle, including cell phones or laptops.",
        "If you think you are being followed, drive to a public place or to the nearest police station.",
        "If your car breaks down, open the hood, if there is one and switch on the hazard or distress lights. If someone stops to help, stay in the locked car, roll down the window a little and ask them to call the police or a tow trucking service.",
        "Don’t stop to aid motorists stopped on the side of the road. Go to a phone and request help for them.",
        "Don't pick up hitchhikers. Don't give a lift to unknown persons.",
    ]

    const homeSafetyTips = [
        "Have your keys of the main door ready before you get to the door. Look back before entering your building or home. If you live in an apartment, close the lobby door behind you, especially if a stranger is approaching. Do not hold the door open for strangers. Make all visitors and delivery persons use the doorbell.",
        "When placing your name on mailboxes or on your bell, use only the last name, e.g., ‘Baruas’, ‘Mahantas’ etc.",
        "If you are staying in an apartment building, don't allow building access blindly to everyone. Instruct the security personnel in the building to maintain a register for all visitors including delivery/courier persons. They should be allowed to proceed only after confirming the same over the intercom or mobile phone from the concerned resident.",
        "Verify a visitor’s identity over the intercom or video door phone if there is one before letting them in. Keep an eye out for suspicious activity like loitering. People may wait outside the building for someone to leave or enter, allowing them access to an open door. If you believe someone has entered the building on false pretexts, call the security personnel on duty or the police immediately.",
        "Be discreet. Don't advertise or publicize your social life or vacation particulars/details on social media platforms. It’s perfectly fine to keep some things for yourself.",
        "Avoid leaving telltale signs of no one being at home if staying out for more than one day, like leaving clothes hanging on the clothesline or piling up of newspapers near the main door. If you are going to stay outside your home for some days, inform the newspaper vendor that you’ll not be requiring the newspaper for those few days.",
        "If possible, installation of smart security cameras and burglar alarms are good investments for home security.",
        "If a certain situation demands that someone must stay all alone in the house even if for short durations and if some kind of threat is perceived, it’ll be a good idea to leave an impression outside the main door like leaving a few pairs of footwear of different sizes outside the main door. This will make it seem like multiple people are in the house.",
    ]

    const childSafetyTips = [
        "Always ensure that children are supervised by a responsible adult, especially in public places or near potential hazards like water bodies, roads, or playgrounds.",
        "Teach children about personal safety, including how to recognize and avoid dangerous situations, and the importance of saying 'no' to strangers or uncomfortable situations.",
        "By teaching basic contact information to your children, you can greatly help them in times of an emergency. Kids should be able to share their full name, your name, their address and a nearby landmark, and older children should also be familiar with a phone number. As young children forget easily, you should practise this as often as possible.",
        "Your child should know that no matter the circumstances, they should never let themselves be led away by any stranger. Educate them that even if someone tries to convince them by saying 'your mother or father has asked me to get you and take you to her/him immediately', they should stay where they are and, if required, call out for help. Remind them that if there is ever an emergency, you will send a grandparent, aunt or someone your child knows and trusts, and never a stranger.",
        "Wandering aimlessly or panicking if your child finds themselves lost will only create further confusion. Teach them that should they ever find themselves in such a situation and they can’t find you, they should approach the nearest security guard or policeman and ask for help. Reinforce the rule that they should not leave the place under any circumstances. You may also teach them to try asking a parent with another child for help.",
        "Create a safe home environment by childproofing areas where children play and sleep. This includes securing furniture, covering electrical outlets, and keeping harmful substances out of reach.",
        "Monitor children's internet usage and educate them about the dangers of sharing personal information online. Encourage open communication about their online activities.",
        "Ensure children follow good hygiene practices, such as regular handwashing, and keep up with vaccinations and regular health check-ups.",
        "Use appropriate car seats, seat belts, and helmets for children when traveling by car or bicycle. Teach them road safety rules and the importance of using pedestrian crossings.",
        "Foster a supportive and loving environment where children feel safe to express their feelings and concerns. Encourage open communication and provide reassurance and guidance.",
        "Make sure you know where each of your children is at all times. Know your children’s friends and be clear with your children about the places and homes they may visit. Make it a rule that your children check in with you when they arrive at or depart from a particular location and when there is a change in plans.",
        "Children should never be left unsupervised or allowed to spend time alone or with others in a vehicle, as the potential dangers to their safety outweigh any of their perceived convenience or fun.",
        "Be sensitive to any changes in your children’s behavior or attitude. Encourage open communication with them and learn how to be an active listener. Look and listen to small indications or clues that something may be troubling your children, because children are not always comfortable disclosing disturbing events or feelings. Listen compassionately to their concern, and work with them to get the help they need to resolve the problem.",
        "Remember that there is no substitute for your attention and supervision. Being available and taking time to really know and listen to your children helps build feelings of safety and security.",
    ]

    const earthquakeTips = {
        precautions: [
            "Fix shelves to walls and remove heavy items from above head level so that they don’t topple over and cause injury during an earthquake.",
            "Keep beds away from windows and objects that might fall.",
            "Secure all appliances to prevent gas or electrical leaks during an earthquake.",
            "Know where the main switches of electric lines and other shut-off valves are located.",
            "Ensure overhead fixtures are secure and keep heavy items clear of exits.",
            "Use plastic containers instead of glass or store glass on lower shelves.",
            "Expect loss of electricity and water after a major earthquake; emergency services may be unavailable for several days.",
            "Store emergency supplies like water, food, first-aid kit, medicines, tools, portable radio, flashlight, batteries, blankets, fire extinguisher, etc.",
        ],
        during: [
            "Remain calm and assist others in maintaining composure.",
            "Proceed safely to the nearest open area that is free from buildings, trees, and overhead power lines, exercising utmost caution.",
            "Do not use elevators during an earthquake, and do not attempt to access the roof of any building.",
            "Select your exit route with careful consideration.",
            "If safe and rapid evacuation is not feasible, particularly in high-rise buildings, remain inside and remain calm.",
            "While indoors, identify a secure location for shelter. Take cover under sturdy furniture such as a desk, table, or bed, or stand in a doorway if you are in an Assam-type house.",
            "If traveling by vehicle, drive promptly to a location away from buildings, large structures, bridges, and electrical lines, and park the vehicle. Remain inside until the earthquake has ceased.",
            "Refrain from lighting candles, gas stoves, or cigarettes to prevent fire hazards due to potential gas leaks.",
            "Turn off the gas supply at its source.",
            "Release pets or domestic animals from enclosures if it is safe to do so.",
            "Maintain composure and avoid panic regardless of the intensity of the tremor.",
        ],
        post: [
            "Check for injuries.",
            "Inspect all areas of the building.",
            "Leave any room or house with wall or ceiling cracks and evacuate if the structure is deemed unsafe.",
            "Use a helmet or protect your head with a pillow or rubber sheet when moving inside the building.",
            "Be prepared for additional earthquakes (aftershocks).",
            "Avoid overhanging sections of buildings, structures, power lines, and poles.",
            "Close the valve of the gas cylinder and avoid using open flames.",
            "Do not switch on electrical appliances.",
            "Wear rubber-soled shoes when walking around.",
            "Assist injured persons and contact medical authorities promptly.",
            "If trapped inside a collapsed building, wait for assistance and remain calm.",
            "Use a stick or pole to check for signs of life inside collapsed structures.",
            "Do not spread or react to unverified information.",
            "Turn on the radio and listen for official announcements.",
        ],
    }

    const fireHazardTips = {
        precautions: [
            "Install smoke alarms. Place smoke alarms on every level of a multi-storey building near potential fire-causing sources.",
            "Test and clean smoke alarms once a month and replace batteries at least once a year.",
            "Replace smoke alarm systems regularly as advised on the manufacturer’s label.",
            "Do not take illegal electrical connections or tinker with power connections.",
            "Review escape routes with your family.",
            "Make sure windows are not nailed or permanently bolted.",
            "Make sure security gratings on windows can be easily opened from the inside.",
            "Consider escape ladders if your residence has more than one level and ensure that burglar bars and other anti-theft systems can be easily opened from the inside.",
            "Teach family members to stay low on the floor (where the air is safer) when escaping from a fire.",
            "Clean out storage areas. Do not let trash such as old newspapers, magazines, or polythene bags accumulate.",
            "Install fire extinguishers at your residence and read the instructions on the labels carefully. Teach family members how to use them.",
            "Consider installing an automatic fire sprinkler system in your residence if possible.",
            "Ask your local fire department to inspect your residence/building for fire safety and prevention.",
        ],
        flammableItems: [
            "Flammable liquids should be stored in appropriate containers in well-ventilated storage areas.",
            "Smoking near flammable liquids should be strictly prohibited.",
            "All rags or materials soaked with flammable liquids must be disposed of safely after use; place them outdoors in a metal container.",
            "Chimneys should be properly insulated and equipped with spark arresters at the top. The chimney elevation must be at least three feet above the roofline. Remove any tree branches overhanging or surrounding the chimney area.",
        ],
        heatingSources: [
            "Use alternative heat sources with caution.",
            "Keep heaters at least three feet from flammable items; insulate the floor and nearby wall surfaces.",
            "Use only the type of fuel designated for your unit and always follow the manufacturer’s instructions.",
            "Store ashes outside in a metal container.",
            "Keep open flames away from walls, furniture, drapery, and other flammable items.",
        ],
        matchesSmoking: [
            "Keep matches and lighters away from children, preferably in a locked cabinet.",
            "Never smoke in bed or when drowsy or medicated.",
        ],
        electricalWiring: [
            "Have the electrical wiring in your residence checked by a certified electrician at regular intervals.",
            "Inspect extension cords for frayed or exposed wires or loose plugs.",
            "Make sure outlets have cover plates and no exposed wiring.",
            "Make sure wiring does not run under rugs, over nails, or across high-footfall areas.",
            "Do not overload extension cords or outlets. If you need to plug in multiple appliances, use a unit with built-in circuit breakers to prevent sparks and short circuits.",
            "Make sure insulation does not touch bare electrical wiring.",
        ],
        during: [
            "If your clothes catch fire, stop, drop, and roll until the fire is extinguished. Running makes clothes burn faster.",
            "Cover your nose and mouth, preferably with a moist cloth (or your hands if unavailable), to reduce smoke inhalation.",
            "While escaping from a burning house, cover yourself with a thick blanket if available.",
            "Before opening a closed door to escape, use the back of your hand to check for heat on the top, doorknob, and cracks.",
            "Never use the palm of your hand or fingers to test for heat to avoid disabling burns.",
            "The window can be your best escape option. If you cannot escape, hang a white or light-colored sheet outside the window to alert firefighters to your presence.",
            "Crawl low under smoke to your exit; heavy smoke and poisonous gases collect first along the ceiling.",
            "Close doors behind you as you escape if you can, to delay the spread of fire.",
            "Do not re-enter once you have escaped. Call the local fire department.",
        ],
        after: [
            "If you are with burn victims, or are a burn victim yourself, cool and cover burns to reduce chances of further injury or infection.",
            "Go to the nearest medical establishment for help.",
            "If you detect heat or smoke when entering a damaged building, evacuate immediately.",
            "If you have a safe or strong box, do not try to open it. It can hold intense heat for several hours; opening it before it cools can cause the contents to burst into flames.",
        ],
    }

    return (
        <>
            <SiteHeader />

            <main className="min-h-screen p-10 max-w-6xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-[#8B0000]">General Security Tips for Citizens</h1>
                <p className="mt-2 text-lg text-[#556B2F] leading-relaxed text-justify">
                    Staying safe and secure in your daily life requires a combination of awareness, preparedness, and common sense.
                </p>

                {/* Root accordion: multiple sections can stay open */}
                <Accordion type="multiple" defaultValue={["personal"]} className="w-full">

                    <AccordionItem value="personal">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Personal Safety</AccordionTrigger>
                        <AccordionContent>
                            <TipsList items={personalSafetyTips} />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="car">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Car Safety</AccordionTrigger>
                        <AccordionContent>
                            <TipsList items={carSafetyTips} />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="home">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Home Safety</AccordionTrigger>
                        <AccordionContent>
                            <TipsList items={homeSafetyTips} />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="child">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Child Safety</AccordionTrigger>
                        <AccordionContent>
                            <TipsList items={childSafetyTips} />
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="earthquake">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Earthquake Safety</AccordionTrigger>
                        <AccordionContent className="space-y-6">
                            {/* Nested accordion for sub-sections */}
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="eq-pre">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Precautions</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={earthquakeTips.precautions} />
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="eq-during">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">During Earthquake</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={earthquakeTips.during} />
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="eq-post">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Post Earthquake</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={earthquakeTips.post} />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="fire">
                        <AccordionTrigger className="text-2xl font-semibold text-[#8B0000]">Fire Hazard Safety</AccordionTrigger>
                        <AccordionContent className="space-y-6">
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="fire-pre">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Precautions</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.precautions} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-flam">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Flammable Items</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.flammableItems} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-heat">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Heating Sources</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.heatingSources} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-smk">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Matches and Smoking</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.matchesSmoking} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-elec">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">Electrical Wiring</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.electricalWiring} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-during">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">During Fire</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.during} />
                                    </AccordionContent>
                                </AccordionItem>

                                <AccordionItem value="fire-after">
                                    <AccordionTrigger className="text-xl text-[#556B2F]">After Fire</AccordionTrigger>
                                    <AccordionContent>
                                        <TipsList items={fireHazardTips.after} />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </main>

            <SiteFooter />
        </>
    )
}
