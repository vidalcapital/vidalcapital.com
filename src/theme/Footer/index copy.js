import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";

import styles from './styles.module.css';

import Container from "../../components/container";
import Heading from "../../components/heading";

function Foot() {

	const component = 'foot';

	return (
		<div className={style.foot}>
			<Container
				componentClass={component}
				spacingBottom={'small'}
				spacingTop={'none'}
				bgColor={'light'}
			>
				<div className={`${component}__columns`}>
					<div className={`${component}__column ${component}__column--left`}>
						Made with &hearts; by &nbsp;
						<a href="https://eightshift.com/" target="_blank" rel="noopener noreferrer" className={`${component}__link`}>
							{'Eightshift'}
						</a>
						{' team | '}
						<a href={useBaseUrl('/sitemap.xml')} target="_blank" rel="noopener noreferrer" className={`${component}__link`}>
							{'Sitemap'}
						</a>
					</div>
					<div className={`${component}__column ${component}__column--right`}>
						<span className={`${component}__copy`}>
							{'© Eightshift. All rights reserved.'}
						</span>
						<span className={`${component}__logo-wrap`}>
							{'Part of '}
							<a href="https://infinum.com/" target="_blank" rel="noopener noreferrer" rel="nofollow" className={`${component}__logo`}>
								<img src={useBaseUrl('img/ic-infinum-logo.svg')} />
							</a>
						</span>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default function Footer() {
    const { footer } = useThemeConfig();
    if (!footer) {
        return null;
    }
    const { copyright, links, logo, style } = footer;
    return (
        <FooterLayout
            style={style}
            links={
                links &&
                links.length > 0 && (
                    <FooterLinks
                        links={links.filter(
                            (el) => !`${el.title}`.startsWith("__"),
                        )}
                    />
                )
            }
            legalLinks={
                links && links.length > 0
                    ? links.find((el) => el.title === "__LEGAL")
                    : undefined
            }
            socialLinks={
                links && links.length > 0
                    ? links.find((el) => el.title === "__SOCIAL")
                    : undefined
            }
            logo={logo && <FooterLogo logo={logo} />}
            copyright={copyright && <FooterCopyright copyright={copyright} />}
        />
    );
}

import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from './../components/heading/heading';
import Container from './components/container/container';
import Arrow from './../../components/arrow/arrow';

export default function Footer() {

	const component = 'shift-footer';

	const itemsData = [
		{
			icon: useBaseUrl('img/ic-boilerplate.svg'),
			label: 'Eightshift<br />Boilerplate',
			link: 'https://github.com/infinum/eightshift-boilerplate',
		},
		{
			icon: useBaseUrl('img/ic-boilerplate-plugin.svg'),
			label: 'Eightshift<br />Boilerplate Plugin',
			link: 'https://github.com/infinum/eightshift-boilerplate-plugin',
		},
		{
			icon: useBaseUrl('img/ic-frontend-libs.svg'),
			label: 'Eightshift<br />Frontend Libs',
			link: 'https://github.com/infinum/eightshift-frontend-libs',
		},
		{
			icon: useBaseUrl('img/ic-libs.svg'),
			label: 'Eightshift<br />Libs',
			link: 'https://github.com/infinum/eightshift-libs',
		}
	];

	const items = itemsData.map((item, index) => {
		const {
			icon,
			label,
			link,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<a className={`${component}__link`} href={link} target="_blank" rel="noopener noreferrer">
					<div className={`${component}__icon`}>
						<img src={icon} />
					</div>
					<div className={`${component}__label`} dangerouslySetInnerHTML={{__html: label}}></div>
					<Arrow componentClass={component} />
				</a>
			</div>
		)
	});

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
				bgColor={'light'}
			>
				<Heading
					componentClass={component}
					title={'Start exploring'}
				/>
				<div className={`${component}__content`}>
					{items}
				</div>
			</Container>
		</div>
	);
}
