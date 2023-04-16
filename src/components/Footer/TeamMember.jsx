import { ReactComponent as GithubIcon } from 'images/svg/github.svg';

const TeamMember = ({ name, link, photo }) => {
  return (
    <a
      className="group flex flex-col items-center"
      href={link}
      target="_blank"
      rel="noopener noreferrer nofollow"
      title={`Follow ${name} on GitHub`}
    >
      <div className="relative flex items-center justify-center w-32 h-32 mb-3 overflow-hidden border-4 rounded-full bg-accentDark dark:border-accentMain transition-colors duration-500">
        <img
          className="object-cover group-hover:opacity-50 dark:group-hover:opacity-20 transition-opacity duration-500"
          src={photo}
          alt={name}
          width={128}
          height={128}
        />
        <GithubIcon className="absolute top-full fill-white w-10 h-10 group-hover:-translate-y-full transition-transform duration-500" />
      </div>
      <p className="font-medium">{name}</p>
    </a>
  );
};

export default TeamMember;
