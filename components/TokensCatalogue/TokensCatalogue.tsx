import baseTokens from "@/tokens/base.json";
import lightTokens from "@/tokens/light.json";
import styles from "./TokensCatalogue.module.scss";

interface Token {
    name: string;
    var: string;
    value: string;
}

type LightTokenShape = {
    light: { colour: Record<string, { value: string }> };
};

type BaseTokenShape = {
    size: { icon: Record<string, { value: string }> };
};

function colourTokens(): Token[] {
    const colours = (lightTokens as LightTokenShape).light.colour;
    return Object.keys(colours).map((name) => ({
        name,
        var: `--colour-${name}`,
        value: colours[name].value,
    }));
}

function iconTokens(): Token[] {
    const icons = (baseTokens as BaseTokenShape).size.icon;
    return Object.keys(icons).map((name) => ({
        name,
        var: `--size-icon-${name}`,
        value: icons[name].value,
    }));
}

export default function TokensCatalogue() {
    const colours = colourTokens();
    const icons = iconTokens();
    return (
        <div className={styles.wrapper}>
            <section>
                <h2>Colours</h2>
                <ul className={styles.list}>
                    {colours.map((t) => (
                        <li key={t.var} className={styles.item}>
                            <span
                                className={styles.swatch}
                                style={{ background: `var(${t.var})` }}
                            />
                            <code>{t.var}</code>
                            <code>{t.value}</code>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Icon sizes</h2>
                <ul className={styles.list}>
                    {icons.map((t) => (
                        <li key={t.var} className={styles.item}>
                            <svg
                                style={{
                                    width: `var(${t.var})`,
                                    height: `var(${t.var})`,
                                }}
                                viewBox="0 0 24 24"
                                className={styles.icon}
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    fill="currentColor"
                                />
                            </svg>
                            <code>{t.var}</code>
                            <code>{t.value}</code>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
