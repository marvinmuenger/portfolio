import styled from '@emotion/styled';
import tw from 'twin.macro';

import { getProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { List } from '~/components';
import { ListActionType } from '~/types';

import type { GetServerSideProps } from 'next';

import type { ListAction, Projects } from '~/types';

interface ProjectProps {
	projects: string;
}

const Container = styled.div(tw`
	my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8
`);

const Content = styled.div(tw`
	relative max-w-xl mx-auto
`);

const ProjectIcon = styled.span(tw`
	text-xl
`);

export const getServerSideProps: GetServerSideProps<ProjectProps> = async ({ res }) => {
	res.setHeader('Cache-Control', 'public, max-age=3600, immutable');

	return {
		props: {
			projects: JSON.stringify({"pageProps":{"stringifiedProjects":"[{\"description\":\"[WIP] Experimental 3D Rust game engine\",\"icon\":\"🦀\",\"homepage\":\"\",\"name\":\"atlas\",\"template\":false,\"url\":\"https://github.com/nurodev/atlas\"},{\"description\":\"Template repository to create a new Rust library crate\",\"icon\":\"📦\",\"homepage\":\"\",\"name\":\"crate-template\",\"template\":false,\"url\":\"https://github.com/nurodev/crate-template\"},{\"description\":\" Template repository to help bootstrap a new Deno module\",\"icon\":\"🦕\",\"homepage\":\"\",\"name\":\"deno-module\",\"template\":false,\"url\":\"https://github.com/nurodev/deno-module\"},{\"description\":\" JavaScript / TypeScript SDK for the Lemon Squeezy API\",\"icon\":\"🍋\",\"homepage\":\"https://paka.dev/npm/lemonsqueezy.ts\",\"name\":\"lemonsqueezy.ts\",\"template\":false,\"url\":\"https://github.com/nurodev/lemonsqueezy.ts\"},{\"description\":\" Lightweight MailerSend Node.js api written in TypeScript\",\"icon\":\"📫\",\"homepage\":\"https://npmjs.com/package/@nurodev/mailersend.ts\",\"name\":\"mailersend.ts\",\"template\":false,\"url\":\"https://github.com/nurodev/mailersend.ts\"},{\"description\":\"Bootstrap Next.js with WindiCSS & more\",\"icon\":\"💨\",\"homepage\":\"https://nextwind.nuro.dev\",\"name\":\"nextwind\",\"template\":false,\"url\":\"https://github.com/nurodev/nextwind\"},{\"description\":\"Template project to build a new NPM package using TypeScript\",\"icon\":\"❗\",\"homepage\":\"\",\"name\":\"npm-template\",\"template\":false,\"url\":\"https://github.com/nurodev/npm-template\"},{\"description\":\" Personal Portfolio\",\"icon\":\"🌿\",\"homepage\":\"https://nuro.dev\",\"name\":\"nuro.dev\",\"template\":false,\"url\":\"https://github.com/nurodev/nuro.dev\"},{\"description\":\" A lightweight PUBG API wrapper written in TypeScript\",\"icon\":\"🐔\",\"homepage\":\"https://paka.dev/npm/pubg.ts\",\"name\":\"pubg.ts\",\"template\":false,\"url\":\"https://github.com/nurodev/pubg.ts\"}]"},"__N_SSG":true}),
		},
	};
};

export default function ProjectsPage({ projects: serialisedProjects }: ProjectProps) {
	const projects = JSON.parse(serialisedProjects) as Projects;

	return (
		<Layout.Default seo={{ title: 'marvin ─ projects' }}>
			<Container>
				<Content>
					<List.Container
						item={(project, index) => (
							<List.Item
								actions={[
									...(project.post
										? [
												{
													type: ListActionType.LINK,
													external: false,
													href: project.post,
													icon: 'feather:edit-3',
													label: `Blog post about ${project.name}`,
												} as ListAction,
										  ]
										: []),
									...(project.homepage
										? [
												{
													type: ListActionType.LINK,
													href: project.homepage,
													icon: 'feather:home',
													label: `${project.name} homepage`,
												} as ListAction,
										  ]
										: []),
									{
										type: ListActionType.LINK,
										href: project.url,
										icon: 'feather:github',
										label: 'GitHub Repository',
									},
								]}
								description={project.description}
								icon={<ProjectIcon>{project.icon}</ProjectIcon>}
								key={index}
								title={project.name}
							/>
						)}
						items={projects}
					/>
				</Content>
			</Container>
		</Layout.Default>
	);
}
