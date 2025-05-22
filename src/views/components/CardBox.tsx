import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BtnCustom } from "./BtnCustom";

export function CardBox() {
	const productUrl = "/catalogue/produit";

	return (
		<div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-bio-contraste/25 bg-bio-contraste/25 shadow-md">
			{/* Image du produit */}
			<NavLink
				className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
				to={productUrl}
				aria-label="Product Image"
				aria-describedby="product-description"
				aria-labelledby="product-title"
				role="img"
			>
				<img
					className="object-cover w-full"
					src="/assets/jus.jpg"
					alt="product image"
				/>
				<span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
					39% OFF
				</span>
			</NavLink>
			<div className="mt-4 px-5 pb-5">
				{/* Titre du produit - séparé du lien image */}
				<h5 className="text-xl tracking-tight text-slate-900">
					<NavLink to={productUrl}>Jus de mangas</NavLink>
				</h5>
				<div className="mt-2 mb-5 flex items-center justify-between">
					<p>
						<span className="text-2xl font-bold text-slate-900">
							1500 FCFA
						</span>
					</p>
					<div className="flex items-center">
						{/* Étoiles de notation */}
						<svg
							aria-hidden="true"
							className="h-5 w-5 text-kawral-yellow"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="h-5 w-5 text-kawral-yellow"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="h-5 w-5 text-kawral-yellow"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="h-5 w-5 text-kawral-yellow"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="h-5 w-5 text-kawral-yellow"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
							5.0
						</span>
					</div>
				</div>
				<BtnCustom
					to="#"
					className="w-full flex items-center justify-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="mr-2 h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						/>
					</svg>
					Commander
				</BtnCustom>
			</div>
		</div>
	);
}

export function CardCart({ className }: { readonly className?: string }) {
	const [qte, setQte] = useState(1);
	return (
		<div className={`flex gap-2 p-4 ${className}`}>
			<img
				className="w-[100px] h-[100px] object-contain"
				src="/assets/fraise.avif"
				alt="Produit sélectionné"
			/>
			<div className="flex flex-grow flex-col gap-2">
				<h2 className="text-lg font-black">Boisson à bénéfices</h2>
				<p className="text-sm">800 FCFA</p>
				<div className="flex justify-between items-end">
					<div className="flex gap-2 border-1 w-fit p-2">
						<button
							className="mx-2 cursor-pointer"
							onClick={() => {
								if (qte > 1) {
									setQte(qte - 1);
								}
							}}
						>
							-
						</button>
						<span>{qte}</span>
						<button
							onClick={() => {
								setQte(qte + 1);
							}}
							className="mx-2 cursor-pointer"
						>
							+
						</button>
					</div>
					<MdDelete className="text-red-500 text-2xl" />
				</div>
			</div>
		</div>
	);
}
