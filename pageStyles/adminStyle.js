import styled from 'styled-components'

// export const Container = styled.div`
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 20vh 0 5vh;

//     section {
//         background: white;
//         min-width: 30%;
//         border-radius: 10px;
//         padding: 1rem;

//         h1 {
//             text-decoration: underline;
//             margin-bottom: 25px;
//             text-align: center;
//         }
//     }

//     &>div {
//         margin: 2rem 0;
//     }

//     form {
//         div label {
//             display: inline-block;
//             &.fileLabel {
//             padding: 5px 10px;
//             border-radius: 20px;
//             border: 2px solid red;
//             cursor: pointer;
//             margin-right: 10px;

//                 &:hover{
//                     background: #ddd;
//                 }
//                 &.green{
//                     border: 2px solid #04ff00;
//                 }
//             }
//         }

//         label {
//             display: block;
//             width: max-content;
//             margin-top: 10px;
//             transition: 200ms;
//         }

//         input {
//             transition: 200ms;

//             &:not(:last-of-type){
//                 margin-bottom: 10px;
//             }

//             &[type=file]{
//                 display: none;
//             }

//             &[type=text], &[type=email], &[type=tel]{
//                 padding: 5px;
//             }

//             &[type=submit]{
//                 display: block;
//                 cursor: pointer;
//                 padding: 5px 7px;
//                 border-radius: 10px;
//                 background: none;
//                 border: 2px solid black;
//                 margin-top: 10px;

//                 &:hover{
//                     background: #ddd;
//                 }
//             }
//         }

//         small{
//             margin-left: 5px;
//             color: red;
//         }
//     }
// `

export const Container = styled.section`
	min-height: 87vh;
	display: flex;
	flex-direction: column;
	align-items: center;

	padding: 10vh 0;

	form {
		box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
		padding: 2rem;
		margin: 2rem 0;
		width: 100%;
		max-width: 500px;

		h1 {
			font-size: 2rem;
			font-weight: bold;
			text-decoration: underline;
			margin-bottom: 20px;
		}

		label,
		input,
		textarea {
			margin-bottom: 10px;
		}

		label {
			display: block;
			font-weight: bold;
			font-size: 1.2rem;
		}

		input,
		textarea {
			padding: 10px;
			width: 100%;
			resize: none;
			border: 1px solid #888;
			border-radius: 4px;
		}

		input[type='number'] {
			width: 50%;
		}

		textarea {
			height: 100px;
		}

		button {
			display: block;
			margin: 5px 0 0 auto;
			width: 7rem;
			border: 0;
			background-color: black;
			font-size: 1.2rem;
			font-weight: bold;
			color: white;
			padding: 7px 0;
			border-radius: 100px;
			transition: width 200ms ease;
			cursor: pointer;

			&:hover {
				width: 8rem;
			}
		}
	}
`
