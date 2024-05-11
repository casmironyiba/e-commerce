'use client'
import styles from "@/styles/layouts/auth/signupLayout.module.scss";


export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={styles.signupLayoutContainer}>
        <div className={styles.signupLayoutWrapper}>
          <h1>
            Admin Sign up
          </h1>
        </div>
        {children}
    </div>
  )
};


