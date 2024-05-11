'use client'
import { colors } from "@/components/Themes";
import boxProperty from "@/fp/boxProperty";
import displayFlex from "@/fp/displayFlex";
import { mediaQueries } from "@/fp/mediaQueries";
import remsize from "@/fp/remsize";
import styles from "../../../styles/layouts/auth/signinLayout.module.scss";


export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.signinLayoutContainer}>
        <div className={styles.signinLayoutWrapper}>
          <h1>
            Sign In
          </h1>
        </div>
        {children}
    </div>
  )
};

