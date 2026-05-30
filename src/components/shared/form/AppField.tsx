import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import type { AnyFieldApi } from "@tanstack/react-form"
import React from "react"

const getErrorMessage = (error: unknown): string => {
    if(typeof error === "string") {
        return error
    }

    if(error && typeof error === "object"){
        if("message" in error && typeof error.message === "string") {
            return error.message
        }
    }

    return String(error)
}




type AppFieldProps = {
    field: AnyFieldApi
    label: string
    type?: string
    placeholder?: string
    append?: React.ReactNode
    prepend?: React.ReactNode
    className?: string
    disabled?: boolean
}

const AppField = ({
    field,
    label,
    type = "text",
    placeholder,
    append,
    prepend,
    className,
    disabled = false,
}: AppFieldProps) => {


    const firstError = field.state.meta.isTouched && field.state.meta.errors.length > 0 ? getErrorMessage(field.state.meta.errors[0]) : null

    const hasError = firstError !== null





    return (
        <div className={cn("space-y-1", className)}>

            <Label
                htmlFor={field.name}
                className={cn(hasError ? "text-red-600" : "text-gray-700")}>

                {label}

            </Label>

            <div className="relative">
                {
                    prepend && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {prepend}
                        </div>
                    )
                }

                <Input
                    id={field.name}
                    name={field.name}
                    type={type}
                    placeholder={placeholder}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    disabled={disabled}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? `${field.name}-error` : undefined}



                    className={cn(
                        "block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm",
                        prepend && "pl-10",
                        append && "pr-10",
                        disabled && "bg-gray-100 cursor-not-allowed",
                        hasError && "border-destructive focus:border-destructive focus:ring-destructive",
                    )}
                />

                {
                    append && (
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            {append}
                        </div>
                    )
                }

                {
                    hasError && (
                        <p
                            id={`${field.name}-error`}
                            role="alert"
                            className="mt-1 text-sm text-red-600"
                        >
                            {firstError}
                        </p>
                    )
                }

            </div>

        </div>
    )
}