import { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

export default interface IIconButton {
    iconName: IconName,
    iconPrefix: IconPrefix,
    href: string,
    alternate?: boolean,
}