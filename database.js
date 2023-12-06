const scientificFacts = [
    {
        fact: "Water Boils at 100 degrees Celsius (212 degrees Fahrenheit) at Standard Atmospheric Pressure."
    },
    {
        fact: "The Earth Revolves Around the Sun."
    },
    {
        fact: "DNA Contains the Genetic Instructions for the Development and Functioning of Living Organisms."
    },
    {
        fact: "The Speed of Light in a Vacuum is Approximately 299,792 kilometers per second."
    },
    {
        fact: "Gravity is the Force of Attraction Between Masses."
    },
    {
        fact: "E=mc²: Energy is Equal to Mass times the Speed of Light Squared, as Described by Einstein's Theory of Relativity."
    },
    {
        fact: "Plants Convert Sunlight into Energy through Photosynthesis."
    },
    {
        fact: "The Earth's Atmosphere is Composed of Nitrogen, Oxygen, and Other Trace Gases."
    },
    {
        fact: "The Human Body is Composed of Cells as the Basic Structural and Functional Units."
    },
    {
        fact: "Matter is Composed of Atoms, which Consist of Protons, Neutrons, and Electrons."
    },
    {
        fact: "Oxygen is Essential for the Process of Cellular Respiration in Living Organisms."
    },
    {
        fact: "The Human Genome Contains Approximately 20,000-25,000 Protein-Coding Genes."
    },
    {
        fact: "Plate Tectonics Drive Earth's Geological Processes, Resulting in Earthquakes and Volcanic Activity."
    },
    {
        fact: "The Conservation of Energy: Energy Cannot be Created or Destroyed, Only Transformed."
    },
    {
        fact: "The Laws of Thermodynamics Govern the Flow and Transformation of Energy in Physical Systems."
    },
    {
        fact: "Mendelian Genetics: Inheritance of Traits Follows Specific Patterns Described by Gregor Mendel."
    },
    {
        fact: "Electrons Orbit the Nucleus in Specific Energy Levels or Shells in an Atom."
    },
    {
        fact: "The Human Brain is Composed of Billions of Neurons that Communicate through Electrical Signals."
    },
    {
        fact: "The Earth's Magnetic North Pole is Not Fixed and Moves Over Time."
    },
    {
        fact: "The Universe is Expanding, as Evidenced by the Redshift of Distant Galaxies."
    },
];

const historicalFacts = [
    {
        fact: "The Invention of the Printing Press by Johannes Gutenberg in 1440 Revolutionized the Spread of Information."
    },
    {
        fact: "The Signing of the Magna Carta in 1215 Laid the Foundation for Constitutional Law and Limited Government."
    },
    {
        fact: "The Declaration of Independence in 1776 Marked the Birth of the United States of America."
    },
    {
        fact: "The Industrial Revolution, Beginning in the Late 18th Century, Transformed Economic and Social Structures."
    },
    {
        fact: "The French Revolution, Starting in 1789, Led to Significant Political and Social Changes in France."
    },
    {
        fact: "The Fall of the Berlin Wall in 1989 Symbolized the End of the Cold War."
    },
    {
        fact: "The Emancipation Proclamation in 1863 Declared the Freedom of Slaves in the United States."
    },
    {
        fact: "The Battle of Stalingrad (1942-1943) Was a Pivotal Turning Point in World War II."
    },
    {
        fact: "The Renaissance (14th to 17th century) Was a Cultural and Intellectual Movement in Europe."
    },
    {
        fact: "The Treaty of Versailles in 1919 Ended World War I and Imposed Terms on Germany."
    },
    {
        fact: "The Silk Road, a Network of Trade Routes, Facilitated Cultural and Economic Exchange Between East and West."
    },
    {
        fact: "India's Independence in 1947 Marked the End of British Colonial Rule."
    },
    {
        fact: "The Maurya Empire (322-185 BCE) was one of the Largest and Most Powerful Empires in Ancient India."
    },
    {
        fact: "The Mughal Empire (1526-1857) Played a Significant Role in Indian History, Art, and Architecture."
    },
    {
        fact: "The Ashoka Pillars, Erected by Emperor Ashoka in the 3rd Century BCE, Spread Buddhist Ideals."
    },
    {
        fact: "The Indian Rebellion of 1857 Was a Significant Uprising Against British Rule in India."
    },
    {
        fact: "The Harappan Civilization (3300-1300 BCE) in the Indus Valley Was an Advanced Urban Society."
    },
    {
        fact: "The Gupta Empire (4th to 6th century CE) is Known as the 'Golden Age' of Ancient Indian History."
    },
    {
        fact: "Gandhi's Salt March in 1930 Protested British Salt Monopoly and Became a Symbol of Nonviolent Resistance."
    },
    {
        fact: "The Battle of Plassey in 1757 Marked the Beginning of British East India Company Control in India."
    },
];

const culturalFacts = [
    {
        fact: "The Japanese Tea Ceremony Emphasizes Ritual, Etiquette, and the Enjoyment of Matcha Tea."
    },
    {
        fact: "Inuit Throat Singing is a Traditional Music Form Among the Inuit People of the Arctic."
    },
    {
        fact: "The Carnival in Rio de Janeiro, Brazil, is One of the World's Largest and Most Famous Festivals."
    },
    {
        fact: "The Chinese New Year Celebrates the Lunar New Year with Festivities, Parades, and Fireworks."
    },
    {
        fact: "Day of the Dead (Día de los Muertos) in Mexico Honors Deceased Loved Ones with Offerings and Celebrations."
    },
    {
        fact: "India's Diwali, the Festival of Lights, Symbolizes the Triumph of Light Over Darkness and Good Over Evil."
    },
    {
        fact: "The Holi Festival in India Involves Colorful Powder and Water Celebrations Signifying the Arrival of Spring."
    },
    {
        fact: "The Maasai People of East Africa are Known for Their Distinctive Beadwork and Colorful Clothing."
    },
    {
        fact: "The Sami People of Northern Europe Have a Rich Cultural Heritage Centered Around Reindeer Herding."
    },
    {
        fact: "The Oktoberfest in Munich, Germany, is the World's Largest Volksfest (Beer Festival)."
    },
    {
        fact: "Traditional Maori Tattoos, or Moko, Convey Identity and Heritage Among the Maori People of New Zealand."
    },
    {
        fact: "India's Classical Dance Forms, Such as Bharatanatyam and Kathak, Have Rich Artistic and Cultural Significance."
    },
    {
        fact: "Bollywood, India's Film Industry, is Known for Its Colorful and Musical Extravaganzas."
    },
    {
        fact: "The Japanese Cherry Blossom Festival (Hanami) Celebrates the Beauty of Cherry Blossom Trees."
    },
    {
        fact: "The Brazilian Samba Dance Originated in Afro-Brazilian Communities and is Central to Carnaval."
    },
    {
        fact: "The Flamenco Dance and Music Tradition Originated in the Andalusian Region of Spain."
    },
    {
        fact: "India's Diverse Cuisine Includes Regional Specialties like Masala Dosas, Biryani, and Chole Bhature."
    },
    {
        fact: "The Aboriginal Didgeridoo is a Traditional Australian Instrument Used in Ceremonies and Art."
    },
    {
        fact: "The South Korean Hanbok is a Traditional Costume Known for Its Bright Colors and Simple Lines."
    },
    {
        fact: "The Hawaiian Hula Dance Tells Stories Through Movement and is Often Accompanied by Chants and Music."
    },
];

const socialFacts = [
    {
        fact: "The Internet and Social Media Have Transformed Communication Patterns Globally."
    },
    {
        fact: "The Industrial Revolution Led to Urbanization and Changes in Work and Family Structures."
    },
    {
        fact: "The Women's Suffrage Movement Fought for and Achieved Women's Right to Vote in Many Countries."
    },
    {
        fact: "The Civil Rights Movement in the United States Aimed to End Racial Segregation and Discrimination."
    },
    {
        fact: "The #MeToo Movement Arose to Address and Combat Sexual Harassment and Assault."
    },
    {
        fact: "India's Caste System Has Historical and Social Significance, Dividing People into Different Social Classes."
    },
    {
        fact: "The Universal Declaration of Human Rights, Adopted in 1948, Outlines Fundamental Human Rights."
    },
    {
        fact: "The Green Revolution in Agriculture Increased Crop Yields and Altered Farming Practices Worldwide."
    },
    {
        fact: "The LGBTQ+ Rights Movement Advocates for Equal Rights and Protections for the LGBTQ+ Community."
    },
    {
        fact: "The World Health Organization (WHO) Works to Improve Global Health and Access to Healthcare."
    },
    {
        fact: "India's Reservation System Aims to Provide Social and Educational Opportunities to Marginalized Communities."
    },
    {
        fact: "The Red Cross and Red Crescent Societies Provide Humanitarian Aid and Support Worldwide."
    },
    {
        fact: "The United Nations Sustainable Development Goals Address Social and Environmental Challenges."
    },
    {
        fact: "India's Panchayati Raj System Promotes Local Self-Governance and Rural Development."
    },
    {
        fact: "The Fair Trade Movement Advocates for Ethical Trading Practices and Fair Wages for Producers."
    },
    {
        fact: "The Black Lives Matter Movement Advocates for the Rights and Equality of Black Individuals."
    },
    {
        fact: "India's Right to Education Act (RTE) Aims to Provide Free and Compulsory Education for Children."
    },
    {
        fact: "The Global Refugee Crisis Highlights Challenges and Humanitarian Issues Faced by Displaced People."
    },
    {
        fact: "The Arab Spring Protests in the Middle East and North Africa Called for Political Reforms and Social Change."
    },
    {
        fact: "India's Swachh Bharat Abhiyan Focuses on Cleanliness and Sanitation to Improve Public Health."
    },
];

export { scientificFacts, historicalFacts, culturalFacts, socialFacts }