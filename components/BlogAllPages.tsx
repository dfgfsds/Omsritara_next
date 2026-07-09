"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "@/lib/utils";

const BlogAllPages: React.FC<{ blogs: any[] }> = ({ blogs }) => {

    return (
        <section className="py-6 px-4 bg-white">
            <div className="max-w-7xl mx-auto container">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6 sm:mb-10 px-2">
                    Spiritual Healing, Reiki & Healing Crystal Blog | Om Sritara
                </h2>
                <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-10 px-2 leading-relaxed">
                    Explore simple, practical articles on Spiritual Healing, Reiki, Healing Crystals, Meditation, Chakra Healing, and Holistic Wellness. Learn from expert insights, discover spiritually energized products personally energized by Guru Matha, and deepen your spiritual journey with Om Sritara.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {blogs?.map((post, idx) => {
                        const date = new Date(post?.created_at);
                        const monthDay = date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "2-digit",
                        });
                        const year = date.getFullYear();

                        return (
                            <div key={idx} className="px-3">
                                <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition duration-300 h-full">
                                    {/* Image Section */}
                                    <div className="relative h-56 w-full hover:scale-105 transition-transform duration-300">
                                        {post?.banner_url && (
                                            <Image
                                                src={post.banner_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        )}

                                        {/* Date Badge */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                            <div className="bg-white text-gray-800 text-xs p-4 rounded-full shadow-md text-center w-24">
                                                <p>{monthDay}</p>
                                                <div className="my-1 border-t border-gray-300 w-full"></div>
                                                <p>{year}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 text-center">
                                        <h3 className="text-lg font-bold text-gray-900 mt-6">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-2">
                                            {post.description}
                                        </p>

                                        <Link href={`/blog/${slugify(post.title)}`}>
                                            <button className="relative w-36 h-12 rounded-full text-sm font-medium text-white bg-black hover:text-white overflow-hidden z-10 group transition-all duration-300">
                                                <span className="relative z-10">Read more</span>
                                                <span className="absolute left-0 top-0 h-full w-0 rounded-full bg-[#991b1b] transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BlogAllPages;
