import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi cumque dolore ducimus hic ipsum, iste odio provident recusandae repudiandae saepe sint tenetur voluptatem. Accusamus ad architecto aspernatur aut deserunt doloremque eaque eos facere impedit incidunt itaque labore laudantium minima modi molestiae numquam perspiciatis porro quaerat quam, quasi quisquam sed sit sunt vel voluptatum! Accusamus at blanditiis et fugiat hic ipsum, itaque labore laboriosam nisi obcaecati officia officiis porro provident reiciendis unde ut veritatis! Culpa cupiditate deserunt esse exercitationem fugit hic impedit ipsa iure magni maxime perspiciatis qui quisquam, reprehenderit velit veritatis? Aliquid corporis incidunt ipsum maxime pariatur totam veniam?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, commodi cumque dolore ducimus hic ipsum, iste odio provident recusandae repudiandae saepe sint tenetur voluptatem. Accusamus ad architecto aspernatur aut deserunt doloremque eaque eos facere impedit incidunt itaque labore laudantium minima modi molestiae numquam perspiciatis porro quaerat quam, quasi quisquam sed sit sunt vel voluptatum! Accusamus at blanditiis et fugiat hic ipsum, itaque labore laboriosam nisi obcaecati officia officiis porro provident reiciendis unde ut veritatis! Culpa cupiditate deserunt esse exercitationem fugit hic impedit ipsa iure magni maxime perspiciatis qui quisquam, reprehenderit velit veritatis? Aliquid corporis incidunt ipsum maxime pariatur totam veniam?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
