import PropTypes from "prop-types";

const SocialCard = ({ name, url, image }) => {
    return (
        <a className="grid grid-cols-2 w-64 items-center gap-4 py-4 px-8 border rounded-lg shadow-lg hover:shadow-xl hover:text-green-600 transition-all duration-300"
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            <img
                className="w-16 aspect-square rounded-full object-cover"
                src={image}
                alt={name}
            />

            <p className="text-2xl font-semibold text-gray-800 hover:text-green-600 transition-all duration-300">
                {name}
            </p>
        </a>
    );
}

// Props
SocialCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default SocialCard;