const mockNames = [
    'Jonathan',
    'Nahum',
    'Jonathan Tefera Endale',
    'Maria',
    'Luis',
    'Mario',
    'Marta',
];

const mockEmails = [
    'hello@jtefera.com',
    'media@icmadrid.com',
    'correojona@hotmail.com',
    'carlos@icmadrid.com',
    'david@icmadrid.com',
];

const mockTexts = [
    // Lorem ipsum
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
    'Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. ' +
    'Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed ' +
    'pellentesque. Aliquam dui mauris, ' +
    'mattis quis lacus id, pellentesque lobortis odio.',
    // Standart time and date
    'A standard date and time format string uses a single format specifier' +
    ' to define the text representation of a date and time value. ' +
    'Any date and ' +
    'time format string that contains more than one character, ' +
    'including white ' +
    'space, is interpreted as a custom date and time format string; for more ' +
    'information, see Custom Date and Time Format Strings. A standard or ' +
    'custom format string can be used in two ways:',
    // Show expandable
    'If true, this card component will include a button to expand the ' +
    'card. CardTitle, CardHeader and CardActions implement ' +
    'showExpandableButton.',
    // Avatar
    'This is the Avatar element to be displayed on the Card Header. ' +
    'If avatar is an Avatar or other element, it will be rendered. ' +
    'If avatar is a string, it will be used as the image src for an Avatar.',
];

export const getMockName = () => {
    const len = mockNames.length;
    const idx = Math.floor(Math.random() * len);
    return mockNames[idx];
};

export const getMockEmail = () => {
    const len = mockEmails.length;
    const idx = Math.floor(Math.random() * len);
    return mockEmails[idx];
};

export const getMockText = () => {
    const len = mockTexts.length;
    const idx = Math.floor(Math.random() * len);
    return mockTexts[idx];
};

export const getMockTitle = () => {
    return 'Interesting Task #' + Math.floor(Math.random() * 100);
};
