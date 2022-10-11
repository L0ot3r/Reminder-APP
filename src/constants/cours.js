export const data = [
	{
		categorie: 'js',
		cours: [
			{
				title: 'Javascript 1',
				btnSlug: 'Javascript 1',
				body: {
					subtitle: {
						txt: 'Débuter en Javascript',
					},
					text: [
						{
							body: [
								{
									txt: 'Premier Texte Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, explicabo.',
								},
								{
									img: {
										src: 'https://images.innoveduc.fr/react/02-component/react-component-name-misspelling.png',
										width: '100%',
										height: '90px',
									},
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react;
								
		export const App = () => {
			// Mon Code
		}
		
		export default App;`,
										},
									],
								},
								{
									txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								},
							],
						},
					],
				},
			},
			{
				title: 'Javascript 2',
				btnSlug: 'Javascript 2',
				body: {
					subtitle: {
						txt: 'Continuer en Javascript',
					},
					text: [
						{
							body: [
								{
									txt: 'Deuxième Texte Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, explicabo.',
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react;
								
		export const App = () => {
			// Mon Code
		}
		
		export default App;`,
										},
									],
								},
								{
									txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								},
								{
									isList: true,
									txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								},
								{
									isList: true,
									txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								},
								{
									isList: true,
									txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolor veniam aliquam error non, atque iste aut soluta corporis corrupti.',
								},
							],
						},
					],
				},
			},
		],
	},
	{
		categorie: 'react',
		cours: [
			{
				title: '👩‍🏫 Le CSS dans React',
				btnSlug: 'Le CSS dans React',
				body: {
					subtitle: {
						color: 'text-red-500',
						txt: 'Introduction',
					},
					text: [
						{
							body: [
								{
									txt: `Le Style de notre application a un impact très important sur l'apparence des composants, l’interaction utilisateur et son ressenti. Il y a de multiples façons de styliser notre application React, et nous allons en examiner quelques-unes. Gardes en tête qu'il n'y a pas de bonne ou de mauvaise façon de styliser : utilise la façon qui s'adapte le mieux à ton projet ! Nous allons aborder quelques méthodes pour styliser une application React, chaque méthode sera suivie d'un exemple de mise en pratique.`,
								},
								{
									txt: `C'est parti ! 🚀`,
								},
								{
									img: {
										src: 'https://miro.medium.com/proxy/1*YDskBoEKfDDMtI6LMJVKLw.png',
										width: '100%',
										height: '60px',
									},
								},
								{
									txt: `✅ Différentes façon de styliser tes composants en React`,
								},
								{
									title: {
										color: 'text-red-400',
										txt: `🖌️ Le CSS standard`,
									},
								},
								{
									txt: `C'est la première méthode que nous allons évoquer pour intégrer du CSS dans ton application React. Tu es déjà familier avec cette méthode, car tu l'utilises déjà.`,
								},
								{
									txt: `👍 Avantages : bonnes performances, facile à mettre en œuvre, car tu connais déjà le CSS. S'adapte également bien avec des framework CSS comme Tailwind CSS (tu peux voir le guide d'installation avec CRA [qui marche aussi avec un project vite], ou choisis un autre framework CSS sur State of CSS survey).`,
								},
								{
									txt: `👎 Inconvénients : difficile à maintenir, plus difficile à faire évoluer. Impossible de calculer des styles dynamiques.`,
								},
								{
									isList: true,
									txt: `simplement importer ton fichier CSS dans ton composant:`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `// Example.js
import React from 'react';
import "./App.css";

export default function App(){
	return <div className="my-class">Hello world</div>
}`,
										},
									],
								},
								{
									txt: `Il est important de mentionner que lorsque tu crées une règle CSS (class ou ID) avec cette méthode, elle sera disponible dans toute l'application (pour les autres composants) quand tu importes le fichier.`,
								},
								{
									txt: `Pourquoi className et pas juste class ?`,
								},
								{
									txt: `Parce que l'attribut class est un mot réservé en JavaScript. Et le JSX utilise du JavaScript.`,
								},
								{
									hr: true,
								},
								{
									txt: 'Et ton App.css ressemblerait à ceci:',
								},
								{
									sample: [
										{
											style: 'css',
											code: `.my-class {
	color: red;
}`,
										},
									],
								},
								{
									title: {
										color: 'text-red-500',
										txt: `🔬Teste le`,
									},
								},
								{
									txt: `Maintenant c'est ton tour ! Essayes sur l'exercice ci-dessous. N'hésite pas à expérimenter avec ce code !`,
								},
								{
									stack:
										'https://stackblitz.com/edit/react-auna9u?file=src/App.js&embed=1',
								},
								{
									title: {
										color: 'text-red-400',
										txt: '🎨 Intégrer le CSS',
									},
								},
								{
									txt: `Tout comme en HTML, nous pouvons utiliser l'attribut style dans notre application React pour appliquer notre CSS, mais avec quelques légères différences : au lieu d'appliquer des propriétés avec des classes ou des ID CSS, nous les passons directement aux éléments JSX en tant qu'objet. De plus, les propriétés doivent être en camelCase.`,
								},
								{
									txt: `👍 Avantages : comme nous avons affaire à un objet, nous pouvons l'étendre et ajouter d'autres propriétés, changer les valeurs de manière conditionnelle.`,
								},
								{
									txt: `👎 Inconvénients : pas évolutif, impossible d'utiliser les media queries et les pseudo-classe`,
								},
								{
									hr: true,
								},
								{
									txt: `L'exemple suivant, illustre comment nous créons un composant React (ligne 4), comment nous créons les styles pour ce composant (ligne 5), et comment appliquer ces styles au composant (ligne 17)`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `// InLineStyle.js
import React from 'react';

const InLineStyle = () => {
	const container = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		padding: '50px',
		color: '#444',
		border: '1px solid #1890ff',
	}

	return (
		<div style={container}>
			<h1 style={{color: '#0d1a26', fontWeight: 400}}>Hey! We're using inline style!</h1>
		</div>
	)
}

export default InLineStyle;`,
										},
									],
								},
								{
									title: {
										color: 'text-red-500',
										txt: `🔬Teste le`,
									},
								},
								{
									txt: `Maintenant c'est ton tour ! Essayes sur l'exercice ci-dessous. N'hésite pas à expérimenter avec ce code !`,
								},
								{
									stack:
										'https://stackblitz.com/edit/react-fhqkes?file=src/App.js&embed=1',
								},
								{
									title: {
										color: 'text-red-400',
										txt: `🖼️ Les Modules CSS`,
									},
								},
								{
									txt: `Les Modules CSS t'aideront à faire en sorte que les classes CSS aient une portée locale pour un composant, évitant ainsi les conflits de noms de classes que tu pourrais répéter dans ton application. Tu peux également ajouter des classes globales en utilisant :global devant le nom de la classe.`,
								},
								{
									txt: `Ils sont mis en œuvre de la même manière que le CSS normal. Tu dois définir un fichier externe (e.g. App.module.css). Importe-le dans ton composant. Et utilise l'attribut className pour définir les classes.`,
								},
								{
									txt: `👍 Avantages : pas de conflit dans les noms de classe,`,
								},
								{
									txt: `👎 Inconvénients : difficile de partager le même style entre les composants`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `
// CssModule.js
import React from 'react';
import styles from './css.module.css'

const CssModule = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Example Css Module.</h1>
			<button className={styles.button}>Button</button>
		</div>
	);
};

export default CssModule;`,
										},
										{
											style: 'css',
											code: `
/* css.module.css */

.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}

.title {
	color: red;
	font-weight: 700;
}

.button {
	background-color: #000000;
	width: 60px;
}`,
										},
									],
								},
								{
									title: {
										color: 'text-red-500',
										txt: '🔬 Teste le',
									},
								},
								{
									txt: `Maintenant c'est ton tour ! Essayes sur l'exercice ci-dessous. N'hésite pas à expérimenter avec ce code !`,
								},
								{
									stack:
										'https://stackblitz.com/edit/react-cumu36?file=src/App.js&embed=1',
								},
							],
						},
						// Fin du tableau cours
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 01 - Qu'est-ce que React ?`,
				btnSlug: `Qu'est-ce que React ?`,
				body: {
					subtitle: {
						color: 'text-red-500',
						txt: 'Introduction',
					},
					text: [
						{
							body: [
								{
									txt: `Pour commencer ton voyage dans le monde de React, avant de commencer à écrire du code, tu dois comprendre ce qu'est React, son histoire et ce que tu peux construire en l'utilisant.`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/m1HNVtIySoXosQGxYaZNTtMIsPMylf2z.jpeg',
										width: '800px',
									},
								},
								{
									title: {
										txt: `🤓 À la fin de cette quête, tu comprendras:`,
									},
								},
								{
									isList: true,
									txt: `✅ Ce qu'est React`,
								},
								{
									isList: true,
									txt: `✅ Comment les applications front-end étaient construites avant React`,
								},
								{
									isList: true,
									txt: `✅ Pourquoi tu devrais utiliser React`,
								},
								{
									title: {
										txt: `📖 Définition`,
									},
								},
								{
									txt: `React est une bibliothèque JavaScript open-source construite / maintenue par Facebook ainsi que par une communauté de développeurs individuels et d'entreprises.`,
								},
								{
									txt: `Son but est de construire des interfaces utilisateurs ou des composants d'interface utilisateur (une prochaine quête expliquera ce que sont les composants).
								React peut être utilisé comme base pour le développement d'applications monopages (Single Page Application - SPA).`,
								},
								{
									title: {
										txt: `📕 La vie avant React`,
									},
								},
								{
									isList: true,
									txt: `Avant JavaScript, les navigateurs récupéraient et affichaient les documents HTML depuis le serveur.`,
								},
								{
									isList: true,
									txt: `Les seules interactions possibles étaient le click sur les liens et la soumission de formulaires.`,
								},
								{
									isList: true,
									txt: `JavaScript est arrivé en apportant avec lui la manipulation du DOM, ce qui a permis d'avoir des interfaces utilisateur interactives.`,
								},
								{
									isList: true,
									txt: `La création d'applications utilisant les fonctions natives du DOM est fastidieuse et nécessite une grande quantité de code.`,
								},
								{
									isList: true,
									txt: `Puis vint la naissance des bibliothèques front-end telles que React & Angular.`,
								},
								{
									title: {
										txt: `🤔 Pourquoi devrais-tu utiliser un Framework/bibliothèque ?`,
									},
								},
								{
									isList: true,
									txt: `C'est très rapide. (grâce à son DOM virtuel)`,
								},
								{
									isList: true,
									txt: `C'est une des librairies front-end les plus populaires. Du coup, il y a beaucoup d'offres d'emploi disponibles.`,
								},
								{
									isList: true,
									txt: `Cela facilite l'écriture d'applications à grande échelle,`,
								},
								{
									isList: true,
									txt: `Afin de rendre notre code plus court et plus polyvalent,`,
								},
								{
									isList: true,
									txt: `Afin d'établir une façon cohérente de programmer dans une équipe de développement en utilisant une bibliothèque standardisée.`,
								},
								{
									txt: `Depuis que Facebook l'a introduit en 2013, React est devenu une bibliothèque front-end très populaire.`,
								},
								{
									title: {
										txt: `🔧 Que peux-tu construire avec React ?`,
									},
								},
								{
									txt: `Avec React, tu peux :`,
								},
								{
									isList: true,
									txt: `Créer ta propre plateforme de streaming comme Netflix`,
								},
								{
									isList: true,
									txt: `Créer un célèbre réseau social`,
								},
								{
									txt: `Et bien d'autres choses encore...`,
								},
								{
									title: {
										txt: '☝️ Résumé',
									},
								},
								{
									isList: true,
									txt: `React est utilisé pour construire des interfaces utilisateur ou des composants d'interface utilisateur`,
								},
								{
									isList: true,
									txt: `Il a été créé pour permettre une programmation cohérente`,
								},
								{
									isList: true,
									txt: `Avant React, les sites Web étaient interactifs en utilisant la manipulation du DOM en JavaScript`,
								},
							],
						},
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 02 - Qu'est-ce qu'un composant ?`,
				btnSlug: `Qu'est-ce qu'un composant ?`,
				body: {
					subtitle: {
						color: 'text-red-500',
						txt: `Introduction`,
					},
					text: [
						{
							body: [
								{
									txt: `Dans la quête précédente, tu as découvert ce qu'est React.`,
								},
								{
									txt: `Avant de commencer à coder et à t'entraîner, nous avons un petit pas à faire.`,
								},
								{
									txt: `Nous devons apprendre ce qu'est un composant React, la philosophie de React ainsi que la hiérarchie de notre application.`,
								},
								{
									bold: true,
									txt: `Débutons !`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/NEhAhcWv1jifF2hqDKow7EZC3Qm1Hq4v.jpeg',
										width: '800px',
									},
								},
								{
									txt: `🤓 À la fin de cette quête, tu seras capable de comprendre ce qui suit:`,
									bold: true,
								},
								{
									txt: `✅ Qu'est-ce qu'un composant React`,
									semiBold: true,
									isList: true,
								},
								{
									txt: `✅ Quelle est la hiérarchie des composants React`,
									semiBold: true,
									isList: true,
								},
								{
									txt: `✅ Pourquoi utilisons-nous des composants`,
									semiBold: true,
									isList: true,
								},
								{
									txt: `✅ Comment décomposer une UI en composants`,
									semiBold: true,
									isList: true,
								},
								{
									title: {
										txt: `Qu'est-ce qu'un composant ?`,
									},
								},
								{
									isList: true,
									txt: `Il s'agit essentiellement de blocs qui composent une application.`,
								},
								{
									isList: true,
									txt: `Le terme "composant" est utilisé pour désigner un élément ou une section d'une page, comme le montre l'image ci-dessous.`,
								},
								{
									isList: true,
									txt: `Ils divisent et isolent les éléments au sein de l'interface utilisateur à des fins visuelles et comportementales.`,
								},
								{
									isList: true,
									txt: `Un composant peut être décomposé davantage et contenir d'autres composants pour constituer des pages comme dans l'image ci-dessous.`,
								},
								{
									isList: true,
									txt: `L'image contient de multiples composants qui constituent un composant page, par exemple une page d'accueil.`,
								},
								{
									img: {
										src: 'https://codippa.com/wp-content/uploads/2019/02/react-component-2.png',
										width: 500,
										height: 600,
									},
								},
								{
									title: {
										txt: `Hiérarchie des composants`,
									},
								},
								{
									isList: true,
									txt: `Dans React, il y a une hiérarchie lors de la construction d'une application.`,
								},
								{
									isList: true,
									txt: `Typiquement, dans la plupart des applications, nous avons un composant racine appelé App, c'est là que tous les autres composants finissent par atteindre l'arbre des composants.`,
								},
								{
									isList: true,
									txt: `Comme on peut le voir dans le composant App, il y a un composant enfant appelé contacts.`,
								},
								{
									isList: true,
									txt: `Contacts contient les composants enfants suivants AddContact, ContactList & SearchBar.`,
								},
								{
									isList: true,
									txt: `AddContact contient un composant enfant AddContactForm.`,
								},
								{
									isList: true,
									txt: `ContactList contient aussi un composant enfant ContactCard.`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/CywzyRPJDjWtsAQLfXHVQnK7mktTGNwc.png',
										width: 700,
										height: 600,
									},
								},
								{
									txt: `Lorsque des composants sont contenus dans d'autres composants plus haut dans l'arbre (par exemple ContactList contient la ContactCard), il s'agit de relations parent (ContactList) et enfant (ContactCard).
								Elles sont un élément clé de la construction d'applications React cohérentes et évolutives.`,
								},
								{
									txt: `Tous les composants peuvent être les parents ou les enfants d'un autre composant (à l'exception de App, qui ne peut être que le parent).`,
								},
								{
									title: {
										txt: `Comment diviser une page en composants`,
									},
								},
								{
									txt: `En divisant l'application en composants, il est possible d'indiquer ces divisions en utilisant des "boîtes" de couleur :`,
								},
								{
									img: {
										src: 'https://images.innoveduc.fr/react/01-introduction-jsx/chat-widget-component-hierarchy.png',
										width: 700,
									},
								},
								{
									txt: `De cette façon, nous créons une hiérarchie de composants, comme nous l'avons vu dans la section précédente. L'un dans l'autre ! Tout en haut de la hiérarchie se trouve une boîte orange. Elle contient deux cases roses : la "barre latérale" et la "fenêtre de message".`,
								},
								{
									txt: `À leur tour, ces boîtes contiennent des boîtes violettes, qui elles-mêmes contiennent des boîtes vertes.`,
								},
								{
									txt: `En d'autres termes, le composant "sidebar" contient le composant "champ de recherche" et le composant "liste de personnes".`,
								},
								{
									txt: `Ce dernier contient le composant "personne", répété autant de fois que l'utilisateur a de correspondants.`,
								},
								{
									title: {
										txt: `Pourquoi utilisons-nous des composants ?`,
									},
								},
								{
									isList: true,
									txt: `Afin d’écrire ton code une fois et de le réutiliser facilement`,
								},
								{
									isList: true,
									txt: `Par exemple, quand tu écris une Navbar en HTML, tu dois copier et coller ton HTML sur chaque page pour afficher la Navbar.`,
								},
								{
									isList: true,
									txt: `En utilisant React, tu peux écrire ce "HTML " une fois et l'importer dans toutes les zones de ton application où il est nécessaire. Nous te montrerons un exemple similaire dans les prochaines quêtes.`,
								},
								{
									isList: true,
									txt: `Tu peux isoler tout le comportement et la présentation de chaque composant sans avoir d'impact sur le reste de l'UI.`,
								},
								{
									isList: true,
									txt: `En écrivant le composant une fois, cela augmente la réutilisabilité et l'extensibilité.`,
								},
								{
									title: {
										txt: `☝️ Récapitulatif`,
									},
								},
								{
									isList: true,
									txt: `Un composant est un élément constitutif d'une application.`,
								},
								{
									isList: true,
									txt: `Le terme "composant" est utilisé pour désigner un élément ou une section d'une page`,
								},
								{
									isList: true,
									txt: `La hiérarchie des composants représente un arbre de composants qui, à leur tour, montrent les relations entre les parents et les enfants.`,
								},
								{
									isList: true,
									txt: `Nous utilisons les composants à des fins de réutilisation et d'évolutivité.`,
								},
							],
						},
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 03 - Qu'est-ce que JSX`,
				btnSlug: `Qu'est-ce que JSX`,
				body: {
					subtitle: {
						color: 'text-red-500',
						txt: 'Introduction',
					},
					text: [
						{
							body: [
								{
									txt: `Dans cette quête, nous allons découvrir JSX, ainsi que quand et comment l'utiliser.`,
								},
								{
									bold: true,
									txt: `Commençons ! 🚀`,
								},
								{
									img: {
										src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--9hrIvLVU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/9tzvuoyi4q1xo7jo6bil.png',
										width: '100%',
									},
								},
								{
									title: {
										txt: `🤓 À la fin de cette quête, tu pourras :`
									}
								},
								{
									txt: `✅ Comprendre comment une application React est affichée`
								},
								{
									txt: `✅ Comprendre la notation JSX`
								},
								{
									title: {
										txt: `Qu'est-ce que JSX ?`,
									},
								},
								{
									txt: `JavaSscript XML. Il ajoute des fonctionnalités XML à JavaScript. Cela signifie que tu vas désormais pouvoir mélanger JavaScript avec des balises HTML (fonctionnalités telles que HTML) et des fonctionnalités XML (comme les accolades de données). Juste comme ça :`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `<div>
	<h1>I am HTML 1+1=2</h1>
	<h2>{"I am data from XML, I'll do a match operation:"} {1+1}</h2>
</div>`,
										},
									],
								},
								{
									hr: true,
								},
								{
									txt: `Voyons un autre exemple. Le code ci-dessous montre comment tu peux définir une constante javascript (const name = 'John'), une balise <div /> et les mélanger à l'aide d'un <p>{name}</p>`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `const name ='John Doe';
const element = (
<div className="person-item">
		<p>{name}</p>
</div>
);

ReactDOM.render(
element,
document.getElementById('root')
);`,
										},
									],
								},
								{
									txt: `Donc, dans cette exemple :`,
								},
								{
									isList: true,
									txt: `Il existe une variable appelée name, qui a la valeur de 'John Doe'`,
								},
								{
									isList: true,
									txt: `Il existe une variable appelée element qui contient un élément div.`,
								},
								{
									isList: true,
									txt: `Dans cette variable element, tu affiches la valeur de name en utilisant <p>{name}</p>`,
								},
								{
									isList: true,
									txt: `C'est l'utilisation d'accolades dans JSX te permet d'afficher des valeurs dans le code.`,
								},
								{
									isList: true,
									txt: `Il existe une méthode appelée ReactDOM.render() et cette méthode prend deux arguments :
									`,
								},
								{
									isList: true,
									txt: `1 - Le premier est ce que tu veux afficher dans le navigateur. Dans ce cas, c'est la variable element.`,
								},
								{
									isList: true,
									txt: `2 -Le second est l'endroit où il sera injecté document.getElementById('root')`,
								},
								{
									hr: true,
								},
								{
									stack:
										'https://stackblitz.com/edit/01-react-jsx?file=src/index.js&embed=1',
								},
								{
									info: true,
									semiBold: true,
									txt: `Expérimente avec l'exemple ci-dessus. Essaie de créer d'autres variables et affiche-les dans le JSX`,
								},
								{
									title: {
										txt: `💪 Challenge`,
									},
								},
								{
									txt: `Pour les prochaines quêtes, ton objectif est de créer une application de liste de contacts. Nous allons construire cette application petit à petit. Ajout de style, de props, d'imports et d'exports, et plus encore dans chaque quête.`,
								},
								{
									txt: `Cette application doit afficher les e-mails, les téléphones, les noms et un bouton de suppression pour chaque contact.`,
								},
								{
									txt: `À la fin de toutes vos quêtes, cela devrait ressembler à ceci :`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/DQWd1IrDBRtQMfZcbPhCFEvvDJ66J3CR.png',
										width: '100%',
									},
								},
								{
									txt: `Commence par forker le modèle fourni après t'être connecté à StackBlitz :`
								},
								{
									link: true,
									txt: `Modèle`,
									address: 'https://stackblitz.com/edit/01-react-challange-jqk2x3?file=src%2Findex.js'
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/9AdopQRYrdHCFpJVCsWHn2F4btXIseuT.png',
										width: '100%'
									}
								},
								{
									txt: `Dans ce modèle, un seul élément JSX est fourni, mais il ne contient qu'une seule <div> vide, à l'intérieur de laquelle tu dois ajouter tout ton contenu.`
								},
								{
									txt: `Voici quelques lignes directrices :`
								},
								{
									isList: true,
									txt: `Utilise du HTML statique uniquement.`
								},
								{
									isList: true,
									txt: `Ne modifie pas le CSS, même si le résultat n'est pas exactement comme sur la maquette.`
								},
								{
									isList: true,
									txt: `Utilise une <div/> pour contenir chaque contact.`
								},
								{
									isList: true,
									txt: `Utilise un <h3> pour contenir le nom`
								},
								{
									isList: true,
									txt: `Utilise un <h4> pour contenir l'e-mail et le téléphone (utilise un <br /> pour les séparer).`
								},
								{
									isList: true,
									txt: `Utilise un <button> pour ajouter le bouton de suppression.`
								},
								{
									txt: `Poste l'URL de ton StackBlitz afin de valider ta quête.`
								},
								{
									title: {
										txt: `🧐 Critères de validation`
									}
								},
								{
									isList: true,
									txt: `Il y a au moins 5 contacts dans ton application`
								},
								{
									isList: true,
									txt: `La <div> est un parent des éléments <h3>, <h4> et <button>`
								},
								{
									isList: true,
									txt: `Le code est disponible sur StackBlitz`
								},
							],
						},
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 04 - Ton premier composant React`,
				btnSlug: `Ton premier composant React`,
				body: {
					text: [
						{
							body: [
								{
									title: {
										txt: `🤓 A la fin de cette quête, tu seras capable de :`
									}
								},
								{
									txt: `✅ Comprendre comment créer et utiliser un composant dans React.`
								},
								{
									txt: `✅ Comprendre comment fonctionne la ré-utilisabilité d'un composant dans React.`
								},
								{
									txt: `✅ Comprendre la structure d'un composant écrit à l'aide d'une fonction ou d'une classe.`
								},
								{
									hr: true,
								},
								{
									txt: `Maintenant que tu as commencé ton carnet de contacts, tu sais comment écrire du code React, félicitations !`,
								},
								{
									txt: `Mais il y avait un problème, ou plus particulièrement, un problème de duplication.`,
								},
								{
									txt: `Peut-être as-tu utilisé le copier-coller pour créer plusieurs contacts ?
								Et peut-être as-tu utilisé ton code JSX qui est super long ? Et peut-être répétitif (la structure HTML est la même mais avec des informations différentes)`,
								},
								{
									txt: `Ne verrais-tu pas un moyen plus efficace ?`,
								},
								{
									txt: `C'est le moment d'introduire de nouveaux concepts :`,
								},
								{
									bold: true,
									txt: `React Components`,
								},
								{
									title: {
										color: 'text-red-500',
										txt: `Qu'est-ce qu'un composant React ?`,
									},
								},
								{
									txt: `C'est un bout de code réutilisable et indépendant.`,
								},
								{
									title: {
										color: 'text-red-500',
										txt: `Quels sont les différents types de composant en React ?`,
									},
								},
								{
									txt: `Il existe 2 types de composant :`,
								},
								{
									isList: true,
									bold: true,
									txt: `Functional components`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `function MyComponent() {
// Je peux ajouter n'importe quel code en Javascript ici ! 👍 
const myName = 'Bob';

return (
	<div>
		<h1>Je peux écrire ce que je veux ici, c'est du JSX !</h1>
		<p>Bonjour {myName}</p>
	</div>
);
}

// Les fonction fléchées fonctionnent également 👍
const MyComponent = () => {
// Je peux ajouter n'importe quel code en Javascript ici ! 👍 
const myName = 'Bob';

return (
	<div>
		<h1>Je peux écrire ce que je veux ici, c'est du JSX !</h1>
		<p>Bonjour {myName}</p>
	</div>
);
};`,
										},
									],
								},
								{
									isList: true,
									bold: true,
									txt: `Class components`,
								},
								{
									txt: `Comme son nom l'indique, ce sont des classes Javascript (au lieu de fonctions). Ces classes doivent implémenter une méthode render() afin de renvoyer le code JSX qui sera interprété par le navigateur.`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `class MyComponent {
render() {
	// N'oublie pas de retourner de bloc JSX ☝️
	return (
		<div>
			<h1>Je peux écrire ce que je veux ici</h1>
		</div>
	);
}
}`,
										},
									],
								},
								{
									semiBold: true,
									txt: `Il y a beaucoup de différences entre les composants fonctionnels et les composants de classe. (mais nous verrons cela un peu plus tard).`,
								},
								{
									txt: `Pour le moment (et pour soucis de simplicité), nous utiliserons uniquement les composants fonctionnels dans nos exercices.`,
								},
								{
									hr: true,
								},
								{
									txt: `Chose à ne PAS oublier : Le nom des composants React (fonctionnels ou de classe), doivent toujours commencer par une majuscule. Si tu ne respectes pas ce principe, tu auras l'erreur suivante dans ton navigateur lorsque tu lanceras ton application :`,
								},
								{
									img: {
										src: 'https://images.innoveduc.fr/react/02-component/react-component-name-misspelling.png',
										width: '100%',
									},
								},
								{
									txt: `A savoir également, les composants React doivent retourner un et un seul nœud DOM. Si ton composants doit renvoyer plusieurs nœuds DOM, tu devras les encapsuler dans un élément (nœud) parent :`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `const MyComponent = () => {
	// Ce code générera une erreur 🚫
	return (
			<div>
				<h1>Première div</h1>
			</div>
			<div>
				<h2>Seconde div</h2>
			</div>
	);
};

const MyComponent = () => {
	// Ce code là sera quand à lui valide ✅
	return (
		<div>
			<div>
				<h1>Première div</h1>
			</div>
			<div>
				<h2>Seconde div</h2>
			</div>
		</div>
	);
};`,
										},
									],
								},
								{
									txt: `Une fois un composant créé (avec une fonction ou une classe, peu importe), tu peux l'utiliser dans ton application comme une nouvelle balise HTML (et tu même l'utiliser plusieurs fois si tu le souhaites) :`
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react';

import ReactDOM from 'react-dom';

const MyComponent = () => {
	return (
		<div>
			<div>
				<h1>Première div</h1>
			</div>
			<div>
				<h2>Seconde div</h2>
			</div>
		</div>
	);
};

export const App = (
	<div>
		<MyComponent />
		<MyComponent />
		<MyComponent />
		<MyComponent />
		<MyComponent />
	</div>
);

ReactDOM.render(App, document.getElementById('root'));`
										}
									]
								},
								{
									title: {
										txt: `💪 Challenge`
									}
								},
								{
									txt: `Ton but est de créer un composant <Contact /> qui renverra le bloc HTML d'un contact que tu as écrit dans l'exercice précédent.`
								},
								{
									txt: `Utilise le projet que tu as créé dans la quête précédente.`,
									bold: true
								},
								{
									txt: `Tu peux aussi utiliser le template suivant si besoin.`
								},
								{
									txt: `Voici les différents points à respecter :`
								},
								{
									isList: true,
									txt: `Tu dois créer la fonction nommée Contact. Ce sera ton composant React.`
								},
								{
									isList: true,
									txt: `Le composant <Contact /> doit être un composant fonctionnel.`
								},
								{
									isList: true,
									txt: `Le composant <Contact /> retourne un bloc HTML qui correspond à un contact :`
								},
								{
									isList: true,
									txt: `1 - Souviens-toi que ton composant ne doit retourner qu'un seul nœud DOM !`
								},
								{
									isList: true,
									txt: `Tu devras supprimer le contact que tu as créé précédemment dans ton App.`
								},
								{
									isList: true,
									txt: `Utilise ton nouveau composant <Contact /> depuis ton App.`
								},
								{
									isList: true,
									txt: `Appelle ton composant 5 fois. Ton contact sera donc affiché 5 fois avec les même valeurs : ne t'inquiète pas, nous améliorerons ce composant dans la prochaine quête.`
								},
								{
									txt: `Pour valider ta quête, soumet l'URL de ton StackBlitz.`
								},
								{
									title: {
										txt: `🧐 Critères de validation`
									}
								},
								{
									isList: true,
									txt: `Ton code contient un composant <Contact /> qui est créé et utilisé dans ton App.`
								},
								{
									isList: true,
									txt: `Ton code est disponible sur StackBlitz.`
								},
							],
						},
					],
				},
			},
			{
				title: `👩‍🏫 React Basics 05 - Que sont les props dans React ?`,
				btnSlug: `Que sont les props dans React ?`,
				body: {
					subtitle: {
						color: 'text-red-500',
						txt: 'Introduction',
					},
					text: [
						{
							body: [
								{
									txt: `Dans l'exercice précédent, tu as appris à refactoriser ton code avec des composants ; tu as aussi appris comment afficher le même composant en plusieurs exemplaires. Mais il reste un problème : comment personnaliser chaque instance de ton composant, au lieu d'afficher encore et encore les mêmes informations ? 🤔`,
								},
								{
									txt: `Ton application ressemble probablement à ceci pour le moment :`,
								},
								{
									stack:
										'https://stackblitz.com/edit/react-zgha2o?file=src%2Findex.js&embed=1',
								},
								{
									txt: `Y a-t-il un moyen d'utiliser le même composant (mêmes structure, style et comportement), mais avec des données différentes ?`,
								},
								{
									txt: `Bien sûr ! Permets-nous de te présenter :`,
								},
								{
									bold: true,
									txt: `React Props`,
								},
								{
									bold: true,
									txt: `Paré à décoller ! 🚀`,
								},
								{
									title: {
										bold: true,
										txt: `🤓 A la fin de cette quête, tu :`,
									},
								},
								{
									isList: true,
									txt: `✅ Comprendras ce que sont les props.`,
								},
								{
									isList: true,
									txt: `✅ Comprendras "comment" les props fonctionnent et transmettent les informations d'un composant parent à ses enfants`,
								},
								{
									bold: true,
									title: {
										txt: `Composants Parent et Enfant`,
									},
								},
								{
									txt: `Ce concept va être fondamental avant même que l'on parle des props et de leur fonctionnement.
									Prenons un instant pour nous rappeler notre arbre de composants. Tout est basé sur une hiérarchie. Le composant App est toujours au sommet de cet arbre, et tous les sous-composants sont appelés à partir d'ici.`,
								},
								{
									txt: `On parle de relation Parent/Enfant lorsqu'un composant (Parent) contient un appel à un autre composant (Enfant). Dans l'application ci-desous le composant App appelle un composant Contact. On dit donc qu'App est le parent de chaque Contact.`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/kmsdzTzxEPWrokUzC0uUXUAfr2a4sscD.png',
										width: '100%',
									},
								},
								{
									txt: `A partir de maintenant, garde ce concept à l'esprit lorsque tu construis une app en React et que tu utilises des props. Réfère toi toujours à ton arbre de composants pour déterminer où devrait se trouver l'information et à qui elle devrait être transmise.`,
								},
								{
									title: {
										bold: true,
										txt: `Que sont les props ?`,
									},
								},
								{
									txt: `“props” est un mot réservé en React, et il indique les propriétés transmises d'un composant à un autre. Attention, les props sont en lecture seule, ce qui signifie que les données qu'un composant reçoit ne devraient jamais être modifiées.`,
								},
								{
									bold: true,
									txt: `Les props sont transmises d'un Parent à ses Enfants.`,
								},
								{
									txt: `Illustrons tout ça avec l'application que nous avons développée jusqu'ici : Contact devrait recevoir trois props (un nom, un numéro de téléphone et un age). Lorsqu'on appelle le composant depuis App, on va les lui donner avec la syntaxe propriété=valeur (comme en HTML). Pour y voir clair, voici une illustration :`,
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/AVnFnjet9aMYYX0qRGCHOxzg03yaiJlj.png',
										width: '100%',
									},
								},
								{
									txt: `Une chose importante à noter :`,
								},
								{
									quote: true,
									txt: `Les propriétés et leurs valeurs sont "empaquetées" dans un objet pour être envoyées au composant enfant. Tu peux récupérer cet objet grâce au premier paramètre de ta fonction composant.`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from "react";

function Contact (props) {
	
	console.log(props)
	// logs: { name: "Emmanuel", phone: "15525264", age: 22 }

	console.log(props.name)
	// logs: "Emmanuel"

	return (
		<div>My Contact component</div>
	)
}

export default Welcome;`,
										},
									],
								},
								{
									quote: true,
									txt: `La propriété "age" est particulière : on utilise des accolades ({}) qui représentent une expression JSX. On en reparlera plus en détail dans une prochaine quête mais pour le moment, tu peux te dire que ce qui se trouve dans ces accolades est du code JS qui doit être exécuté (18+4=22, la vraie valeur de age dans l'objet qui représente les props)`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react';

const Contact = (props) => {
	console.log(props.age)
	// logs: 22
	
	return <div>My contact component</div>
}


const App = () => {
	return <Contact name="Emmanuel" age={18+4} />
}`,
										},
									],
								},
								{
									txt: `Tu peux envoyer n'importe quel type de données via ces propriétés : non seulement des chaînes de caractères ("Emmanuel", "15525264"), mais aussi des booléens, tableaux, fonctions, nombres, etc... Mais il te faudra alors utiliser les accolades comme vu ci-dessus, car ce sont des expressions JSX.`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `<Contact name="Emmanuel" isDeletable={false} favoriteColors={["red", "blue"]} />`,
										},
									],
								},
								{
									txt: `Tu peux aussi utiliser ces expressions JSX dans le rendu de ton composant pour afficher le contenu de la variable comme du texte.`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react';

const Contact = (props) => {
	console.log(props.age)
	// logs: 22

	return <div>My age is {props.age}</div>
}

const App = () => {
	// Will show My age is 22 in the browser (not in console)
	return <Contact name="Emmanuel" age={18+4} />
}`,
										},
									],
								},
								{
									quote: true,
									txt: `Si tu ne passes aucune propriété depuis le parent, l'objet props existera mais sera un objet vide.`,
								},
								{
									sample: [
										{
											style: 'jsx',
											code: `import React from 'react';

const Contact = (props) => {
	console.log(props)
	// will log {}, an empty object

	return <div>Contact component</div>
}


const App = () => {
	return <Contact />
}`,
										},
									],
								},
								{
									txt: `Utiliser les props rend ton composant dynamique, et cela va nous permettre d'afficher du contenu différent à chaque appel (en fonction des valeurs envoyées) en gardant une structure de base identique.`
								},
								{
									txt: `Prenons un autre exemple : une App qui aura des enfants WelcomeMessage. Le diagramme de notre app ressemblerait à ceci :`
								},
								{
									img: {
										src: 'https://storage.googleapis.com/quest_editor_uploads/HTrQhaPPcSLFw6utkgXaepQa22G8pgr0.png',
										width: '70%'
									}
								},
								{
									txt: `Et le code ressemblerait à ceci (tu remarqueras qu'il y a deux fichiers : un App.jsx qui envoie les données et un WelcomeMessage.jsx qui les reçoit) :`
								},
								{
									stack: 'https://stackblitz.com/edit/react-egbryl?file=src%2FApp.js&embed=1'
								},
								{
									isList: true,
									txt: `Dans le code ci-dessus, on appelle deux fois le composant WelcomeMessage depuis App`
								},
								{
									isList: true,
									txt: `Lorsqu'on appelle WelcomeMessage on lui envoie des props spécifiques (le nom: "Luke" ou "John")`
								},
								{
									isList: true,
									txt: `Dans la fonction définie dans src/components/WelcomeMessage.jsx, on reçoit les props en tant que paramètre.`
								},
								{
									isList: true,
									txt: `On utilise ensuite console.log(props) pour afficher le contenu de l'objet dans notre outil de développement. Ouvre la console pour voir ce qui s'y passe`
								},
								{
									title: {
										txt: `☝️ Résumé`
									}
								},
								{
									isList: true,
									txt: `Les props transitent d'un composant Parent à un composant Enfant`
								},
								{
									isList: true,
									txt: `Les props sont en lecture seule`
								},
								{
									isList: true,
									txt: `Les props peuvent être de n'importe quel type (string, fonction, nombre, etc)`
								},
								{
									isList: true,
									txt: `Les props sont toujours représentés dans un objet, avec ses clés et valeurs`
								},
								{
									isList: true,
									txt: `On utilise la syntaxe JSX pour évaluer des expressions JS dans le retour de notre composant`
								},
								{
									title: {
										txt: `💪 Challenge`
									}
								},
								{
									title: {
										txt: `Rends ton composant <Contact /> dynamique`,
										color: 'text-red-400'
									}
								},
								{
									txt: `Voici toutes les étapes. Lis les toutes avant de démarrer le challenge !`
								},
								{
									isList: true,
									txt: `Utilise ce template pour commencer (ou édite le code de tes exercices précédents)`
								},
								{
									isList: true,
									txt: `Assure toi d'être bien connecté à StackBlitz`
								},
								{
									isList: true,
									txt: `Trouve les cinq appels à Contact. Pour chacun d'entre eux, tu devras passer des props différents au composant :`
								},
								{
									isList: true,
									txt: `1 - Name`
								},
								{
									isList: true,
									txt: `2 - Email`
								},
								{
									isList: true,
									txt: `3 - Phone`
								},
								{
									isList: true,
									txt: `Adapte le console.log pour afficher les props dans la console`
								}
							],
						},
					],
				},
			},
		],
	},
];
