import React from 'react';
import styled from 'styled-components';

const HeroLogoWrapper = styled.svg`
	fill-rule: evenodd;
	clip-rule: evenodd;
	stroke-linecap: round;
	stroke-miterlimit: 1;

	.path {
		fill: #ff9292;
		fill-opacity: 0;
		stroke: #fff;
		stroke-width: 8px;
		stroke-dasharray: 0, 31;
		animation: offset 2.5s 1 cubic-bezier(0, 0, 0.2, 1) forwards;
	}

	.text path {
		fill: #fff;
	}

	@keyframes offset {
		from {
			stroke-dashoffset: -500;
			stroke-width: 1px;
			stroke-dasharray: 50, 0;
		}
	}

	@keyframes offset-text {
		from {
			stroke-dashoffset: -400;
		}
	}
`;

// TODO: text move to the plain HTML
/* eslint-disable max-len */
const HeroLogo = () => (
	<HeroLogoWrapper
		width="100%" height="100%" viewBox="0 0 1024 1024"
		xmlSpace="preserve"
	>
		<path
			className="path"
			d="M671.474,82.166c117.178,58.859 197.668,180.172 197.668,320.137c0,197.596 -160.423,358.02 -358.02,358.02c-197.597,0 -358.02,-160.424 -358.02,-358.02c0,-132.442 72.071,-248.184 179.1,-310.112l0,306.406c0,74.265 14.056,129.157 42.169,164.675c28.113,35.518 71.667,53.277 130.662,53.277c57.929,0 100.152,-17.138 126.668,-51.414c26.515,-34.276 39.773,-89.044 39.773,-164.302l0,-318.667Zm-272.184,-20.042c35.191,-11.577 72.786,-17.841 111.832,-17.841c35.275,0 69.366,5.112 101.57,14.637l0,343.03c0,56.631 -7.826,96.806 -23.48,120.526c-15.654,23.72 -42.223,35.58 -79.707,35.58c-38.336,0 -66.289,-12.605 -83.859,-37.816c-17.571,-25.21 -26.356,-65.509 -26.356,-120.898l0,-337.218Z"
		/>
		<g className="text">
			<path d="M39.827,901.862l-30.155,0l0,43.201l-8.84,0l0,-103.796l33.72,0c11.073,0 19.723,2.685 25.949,8.055c6.226,5.371 9.339,12.88 9.339,22.528c0,6.653 -1.949,12.523 -5.846,17.608c-3.897,5.085 -9.125,8.602 -15.683,10.551l25.949,44.128l0,0.926l-9.339,0l-25.094,-43.201Zm-30.155,-7.485l26.876,0c7.366,0 13.283,-2.091 17.751,-6.273c4.467,-4.183 6.701,-9.601 6.701,-16.254c0,-7.319 -2.329,-12.999 -6.986,-17.038c-4.658,-4.04 -11.193,-6.06 -19.605,-6.06l-24.737,0l0,45.625Z" />
			<path d="M148.606,946.489c-6.559,0 -12.488,-1.616 -17.787,-4.847c-5.299,-3.232 -9.422,-7.735 -12.369,-13.51c-2.946,-5.774 -4.42,-12.25 -4.42,-19.426l0,-3.065c0,-7.414 1.438,-14.092 4.313,-20.033c2.876,-5.94 6.88,-10.61 12.013,-14.008c5.132,-3.398 10.693,-5.097 16.681,-5.097c9.363,0 16.789,3.196 22.278,9.588c5.489,6.393 8.234,15.125 8.234,26.199l0,4.776l-55.035,0l0,1.64c0,8.745 2.507,16.028 7.521,21.85c5.014,5.822 11.323,8.733 18.927,8.733c4.563,0 8.59,-0.832 12.084,-2.495c3.493,-1.663 6.665,-4.325 9.517,-7.984l5.346,4.063c-6.273,9.078 -15.374,13.616 -27.303,13.616Zm-1.569,-72.715c-6.416,0 -11.822,2.353 -16.218,7.058c-4.396,4.705 -7.069,11.026 -8.02,18.963l46.267,0l0,-0.927c-0.238,-7.414 -2.353,-13.45 -6.345,-18.107c-3.992,-4.658 -9.22,-6.987 -15.684,-6.987Z" />
			<path d="M269.86,945.063c-0.856,-2.423 -1.402,-6.012 -1.64,-10.764c-2.994,3.897 -6.808,6.903 -11.442,9.018c-4.634,2.115 -9.541,3.172 -14.721,3.172c-7.414,0 -13.414,-2.067 -18,-6.202c-4.587,-4.135 -6.88,-9.363 -6.88,-15.683c0,-7.51 3.125,-13.45 9.375,-17.823c6.249,-4.372 14.959,-6.558 26.127,-6.558l15.47,0l0,-8.769c0,-5.513 -1.699,-9.85 -5.097,-13.01c-3.398,-3.161 -8.353,-4.741 -14.864,-4.741c-5.941,0 -10.86,1.521 -14.757,4.563c-3.897,3.041 -5.846,6.701 -5.846,10.978l-8.554,-0.071c0,-6.131 2.851,-11.442 8.554,-15.933c5.704,-4.491 12.714,-6.737 21.031,-6.737c8.602,0 15.386,2.15 20.353,6.452c4.966,4.301 7.521,10.301 7.663,18l0,36.5c0,7.462 0.784,13.046 2.353,16.753l0,0.855l-9.125,0Zm-26.805,-6.13c5.703,0 10.8,-1.379 15.292,-4.135c4.491,-2.757 7.758,-6.44 9.802,-11.05l0,-16.967l-15.256,0c-8.507,0.095 -15.161,1.652 -19.961,4.67c-4.8,3.018 -7.2,7.164 -7.2,12.44c0,4.324 1.604,7.913 4.812,10.764c3.208,2.852 7.378,4.278 12.511,4.278Z" />
			<path d="M354.899,939.289c5.941,0 10.919,-1.675 14.935,-5.026c4.016,-3.35 6.19,-7.687 6.523,-13.01l8.198,0c-0.237,4.705 -1.711,8.994 -4.42,12.868c-2.709,3.873 -6.309,6.903 -10.8,9.089c-4.491,2.186 -9.303,3.279 -14.436,3.279c-10.123,0 -18.143,-3.517 -24.06,-10.551c-5.917,-7.033 -8.875,-16.491 -8.875,-28.373l0,-2.566c0,-7.604 1.33,-14.329 3.992,-20.175c2.661,-5.845 6.475,-10.36 11.442,-13.545c4.966,-3.184 10.776,-4.776 17.43,-4.776c8.459,0 15.434,2.519 20.923,7.557c5.489,5.037 8.424,11.667 8.804,19.889l-8.198,0c-0.38,-6.036 -2.554,-10.907 -6.523,-14.614c-3.968,-3.707 -8.97,-5.561 -15.006,-5.561c-7.699,0 -13.676,2.781 -17.929,8.341c-4.254,5.561 -6.381,13.355 -6.381,23.383l0,2.495c0,9.838 2.127,17.514 6.381,23.027c4.253,5.513 10.253,8.269 18,8.269Z" />
			<path d="M441.863,848.182l0,19.747l15.969,0l0,6.986l-15.969,0l0,51.399c0,4.278 0.773,7.462 2.317,9.553c1.545,2.091 4.123,3.137 7.735,3.137c1.426,0 3.731,-0.238 6.915,-0.713l0.356,6.986c-2.233,0.808 -5.275,1.212 -9.125,1.212c-5.845,0 -10.099,-1.699 -12.76,-5.097c-2.662,-3.398 -3.992,-8.4 -3.992,-15.006l0,-51.471l-14.187,0l0,-6.986l14.187,0l0,-19.747l8.554,0Z" />
			<path d="M638.533,841.267l0,70.861c-0.048,6.986 -1.592,13.07 -4.634,18.25c-3.042,5.18 -7.331,9.161 -12.868,11.941c-5.537,2.78 -11.893,4.17 -19.07,4.17c-10.931,0 -19.687,-2.982 -26.27,-8.947c-6.582,-5.964 -9.992,-14.222 -10.23,-24.772l0,-71.503l8.698,0l0,70.219c0,8.745 2.495,15.529 7.485,20.353c4.99,4.824 11.763,7.236 20.317,7.236c8.555,0 15.316,-2.424 20.282,-7.271c4.967,-4.848 7.45,-11.597 7.45,-20.246l0,-70.291l8.84,0Z" />
			<path d="M696.126,867.929l0.285,13.188c2.899,-4.752 6.511,-8.376 10.836,-10.871c4.325,-2.496 9.101,-3.743 14.329,-3.743c8.269,0 14.424,2.329 18.464,6.986c4.039,4.658 6.083,11.644 6.131,20.959l0,50.615l-8.484,0l0,-50.686c-0.047,-6.891 -1.509,-12.024 -4.384,-15.398c-2.875,-3.375 -7.474,-5.062 -13.795,-5.062c-5.275,0 -9.944,1.652 -14.008,4.955c-4.063,3.303 -7.069,7.758 -9.018,13.366l0,52.825l-8.483,0l0,-77.134l8.127,0Z" />
			<path d="M804.762,945.063l-8.555,0l0,-77.134l8.555,0l0,77.134Zm-10.052,-99.448c0,-1.616 0.523,-2.982 1.568,-4.099c1.046,-1.117 2.472,-1.675 4.278,-1.675c1.806,0 3.243,0.558 4.313,1.675c1.069,1.117 1.604,2.483 1.604,4.099c0,1.616 -0.535,2.971 -1.604,4.064c-1.07,1.093 -2.507,1.639 -4.313,1.639c-1.806,0 -3.232,-0.546 -4.278,-1.639c-1.045,-1.093 -1.568,-2.448 -1.568,-4.064Z" />
			<path d="M850.235,905.355c0,-7.414 1.438,-14.091 4.313,-20.032c2.876,-5.941 6.939,-10.562 12.191,-13.865c5.252,-3.304 11.204,-4.955 17.858,-4.955c10.265,0 18.582,3.6 24.951,10.8c6.368,7.2 9.553,16.741 9.553,28.623l0,1.782c0,7.462 -1.438,14.175 -4.313,20.139c-2.876,5.965 -6.927,10.563 -12.155,13.795c-5.228,3.231 -11.192,4.847 -17.894,4.847c-10.218,0 -18.523,-3.6 -24.915,-10.8c-6.392,-7.2 -9.589,-16.741 -9.589,-28.623l0,-1.711Zm8.555,2.353c0,9.22 2.388,16.789 7.165,22.706c4.776,5.917 11.038,8.875 18.784,8.875c7.7,0 13.937,-2.958 18.714,-8.875c4.776,-5.917 7.164,-13.724 7.164,-23.419l0,-1.64c0,-5.893 -1.093,-11.287 -3.279,-16.182c-2.186,-4.895 -5.252,-8.686 -9.196,-11.371c-3.945,-2.685 -8.46,-4.028 -13.545,-4.028c-7.604,0 -13.807,2.983 -18.607,8.947c-4.8,5.965 -7.2,13.771 -7.2,23.419l0,1.568Z" />
			<path d="M971.846,867.929l0.285,13.188c2.899,-4.752 6.511,-8.376 10.836,-10.871c4.325,-2.496 9.101,-3.743 14.329,-3.743c8.27,0 14.424,2.329 18.464,6.986c4.04,4.658 6.083,11.644 6.131,20.959l0,50.615l-8.483,0l0,-50.686c-0.048,-6.891 -1.509,-12.024 -4.385,-15.398c-2.875,-3.375 -7.473,-5.062 -13.794,-5.062c-5.276,0 -9.945,1.652 -14.008,4.955c-4.064,3.303 -7.07,7.758 -9.018,13.366l0,52.825l-8.484,0l0,-77.134l8.127,0Z" />
		</g>
	</HeroLogoWrapper>
);

export default HeroLogo;
