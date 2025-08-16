import Button from "@/components/Button/Button";

type Props = {
    url: string;
    title: string;
};

export default function SocialShare({ url, title }: Props) {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const links = [
        {
            href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            label: "Share on Twitter",
        },
        {
            href: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
            label: "Share on LinkedIn",
        },
        {
            href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            label: "Share on Facebook",
        },
    ];

    return (
        <div>
            {links.map(({ href, label }) => (
                <Button
                    key={label}
                    href={href}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {label}
                </Button>
            ))}
        </div>
    );
}
