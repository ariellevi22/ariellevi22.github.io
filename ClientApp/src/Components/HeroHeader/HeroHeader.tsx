import './HeroHeader.css';
import IconButton from '../IconButton/IconButton';
import { IReactChildren } from '../../Models/IReactChildren';
import IIconButton from '../../Models/IIconButton';

type HeroHeaderProps = {
    imgSrc: string,
    heading: string,
    socialButtons: IIconButton[],
    children: IReactChildren,
}

/**
 * React component representing the hero header of the website, which contains
 * a heading, a photo, and optional additional content.
 * 
 * Usage:
 * ```tsx
 * <HeroHeader imgSrc="./link/to/photo" heading="Heading Text" socialButtons=[button list]>
 *     Additional content
 * </HeroHeader>
 * ```
 */
const HeroHeader = (props: HeroHeaderProps) => {
    let socialButtonDisplay = undefined;
    if (props.socialButtons) {
        socialButtonDisplay = (
            <div className="social-button-container">
                {props.socialButtons.map(button => {
                    return (
                        <IconButton iconName={button.iconName} iconPrefix={button.iconPrefix}
                            href={button.href} key={[button.iconPrefix, button.iconName].join(" ")}
                        />
                    );
                })}
            </div>
        );
    }

    return (
        <div className="hero-header">
            <div className="gradient"/>

            <div className="hero-container">
                <div/>

                <img src={props.imgSrc} alt={props.heading}/>

                <div className="hero-content">
                    <h1>{props.heading}</h1>

                    {props.children}

                    {socialButtonDisplay}
                </div>
            </div>
        </div>
    );
}

export default HeroHeader;