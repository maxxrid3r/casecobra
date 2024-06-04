import { notFound } from "next/navigation";
import { db } from "@/db";
import DesignConfigurator from "@/app/configure/design/DesignConfigurator";

interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

const Page = async ({ searchParams }: PageProps) => {
	const { id } = searchParams

	if (!id || typeof id !== 'string') {
		return notFound()
	}

	const configuration = await db.configuration.findUnique({ where: { id } })
	if(!configuration) {
		return notFound()
	}

	const { imgUrl, width, height } = configuration

	return (
		<DesignConfigurator imgUrl={imgUrl} configId={configuration.id} imgDimensions={{ width, height }} />
	);
};

export default Page;