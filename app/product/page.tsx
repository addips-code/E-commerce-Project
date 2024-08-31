import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
 } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge";
  

type Props ={
    searchParams:{
        url: string;
    }
}

async function ProductPage ({ searchParams: { url } }: Props) {
    const product = await fetchProduct(url);
    if (!product) return notFound();

    return (
       <div className="flex flex-col p-4 lg:flex-row w-full lg:p-10">
            <div className="hidden lg:inline space-y-4">
                {product.images.map((image, i) =>(
            <Image
                key={image}
                src={image}
                alt={product.title + " " + i}
                width={90}
                height={90}
                className="border rounded-sm"
            />
            ))}
            </div>
        
            <Carousel opts={{
                loop: true,
            }}
                className="w-3/5 mb-10 lg:mb-0 lg:w-1/3 slef-start flex items-center mx-auto lg:mx-20 mx-w-xl"
            >
                <CarouselContent>
                  {product.images.map((image, i) =>(
                    <CarouselItem key={i}>
                      <div className="p-1">
                        <div className="flex aspect-square items-center justify-center p-2 relative">
                            <Image
                                key={image}
                                src={image}
                                alt={product.title + " " + i}
                                width={400}
                                height={400}
                            />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex-1 border rounded-md w-full p-5 space-y-5">
                <h1 className="text-3xl font-bold">{product.title}</h1>

                <div className="space-x-2">
                    {product.breadcrumbs.map((breadcrumb, i) =>(
                        <Badge
                            key={breadcrumb + i}
                            className={breadcrumb}
                            variant="outline"
                        >
                            {breadcrumb}
                        </Badge>
                    ))}
                </div>
            </div>
       </div>
    )
}

export default ProductPage