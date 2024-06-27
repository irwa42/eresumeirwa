// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const achievements = [
        {
            title: 'FIRST CLASS OF DEGREE',
            institution: 'Universiti Teknologi Mara (UiTM) Puncak Perdana',
            duration: '2022 - 2023',
            details: [
                'With CGPA 3.80 for full semester.',
                'Recognized for academic excellence and outstanding performance in coursework.'
            ]
        },
        {
            title: 'BEST GRADUATE AWARD',
            institution: 'Universiti Teknologi Mara (UiTM) Puncak Perdana',
            details: ['School of Information Science']
        },
        {
            title: 'BEST STUDENT AWARD',
            institution: 'SMK.SULTAN ISMAIL',
            details: ['SCIENCE STREAM']
        },
        {
            title: 'ROLE MODEL AWARD',
            institution: 'SMK.SULTAN ISMAIL',
            details: ['SCHOOL PERFECTS']
        }
    ];

    const achievementsSection = document.getElementById('achievements-section');

    achievements.forEach(achievement => {
        const title = document.createElement('h3');
        title.textContent = achievement.title;
        achievementsSection.appendChild(title);

        const institution = document.createElement('p');
        institution.textContent = achievement.institution;
        achievementsSection.appendChild(institution);

        if (achievement.duration) {
            const duration = document.createElement('p');
            duration.textContent = achievement.duration;
            achievementsSection.appendChild(duration);
        }

        const detailsList = document.createElement('ul');
        achievement.details.forEach(detail => {
            const listItem = document.createElement('li');
            listItem.textContent = detail;
            detailsList.appendChild(listItem);
        });
        achievementsSection.appendChild(detailsList);

        const hr = document.createElement('hr');
        achievementsSection.appendChild(hr);
    });
});
