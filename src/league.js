
import image28 from '@/assets/images/image28.jpg';
import image29 from '@/assets/images/image29.jpg';
import image31 from '@/assets/images/image31.jpg';

export default function getGroupList() {


    return {
        groups: [
            {
                id: 0,
                emblem: image28,
                name: 'Название лиги1',
                country: 'Страна1'
            },
            {
                id: 1,
                emblem: image29,
                name: 'Название лиги2',
                country: 'Страна2'
            },
            {
                id: 2,
                emblem: image31,
                name: 'Название лиги3',
                country: 'Страна3'
            },
            {
                id: 3,
                emblem: image31,
                name: 'Название лиги4',
                country: 'Страна3'
            },
            {
                id: 4,
                emblem: image28,
                name: 'Название лиги5',
                country: 'Страна1'
            }

        ]
    }
}

