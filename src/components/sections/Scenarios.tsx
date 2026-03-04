'use client';

import { useTranslations } from 'next-intl';
import Tabs from '@/components/ui/Tabs';
import StepCard from '@/components/ui/StepCard';
import CodeBlock from '@/components/ui/CodeBlock';
import Accordion from '@/components/ui/Accordion';

const ANALYZE_PROMPT = `Analyze this project and create a CLAUDE.md file. Include:
- Project overview and tech stack
- Build, run, and test commands
- Project structure
- Code conventions
- Key dependencies
- Deployment info`;

const PROMPTING_FRAMEWORK = `I'm starting a new project. Here's the context:

Project: [name]
Department: [Android Source / APK Tools / Embedded Linux / Smart Devices / Cloud Engineering]
Purpose: [one sentence — what does this project do?]
Platform: [Android TV / Set-top box / Linux SBC / Cloud service / etc.]
Languages: [Java / Kotlin / C / C++ / Python / Go / TypeScript / etc.]
Framework: [AOSP / Buildroot / Spring Boot / FastAPI / React / etc.]
Build system: [Gradle / Make / CMake / Bazel / npm / etc.]
Key dependencies: [list main libraries or services]
Team conventions: [e.g., comments in Chinese, commit messages in English, etc.]

Please:
1. Set up the initial project structure
2. Create a CLAUDE.md file that captures all of the above
3. Include build/run/test commands in CLAUDE.md`;

const CLAUDE_MD_TEMPLATE = `# Project Name

## Overview
Brief description of what this project does and which SEI Robotics department owns it.

## Tech Stack
- **Language**:
- **Framework**:
- **Build System**:
- **Target Platform**:

## Getting Started
### Prerequisites
### Build
### Run
### Test

## Project Structure
Key directories and what they contain.

## Code Conventions
- Comment language: [Chinese / English / both]
- Naming: [camelCase / snake_case / etc.]
- Commit messages: [language, format]
- Branch naming: [feature/xxx, bugfix/xxx]

## Key Dependencies
| Package | Version | Purpose |
|---------|---------|---------|

## Deployment
How and where this project is deployed.

## Team
- Department:
- GitLab group:
- Maintainers:

## Claude Code Notes
Special instructions for Claude Code when working on this project.
- Preferred models/tools
- Files to never modify
- Testing requirements before commits`;

export default function Scenarios() {
  const t = useTranslations('scenario');

  return (
    <section id="scenarios" className="scroll-mt-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/15 text-sm font-bold text-accent-400 font-mono">
          05
        </span>
        <h2 className="text-2xl font-display font-bold text-white sm:text-3xl">
          {t('title')}
        </h2>
      </div>

      <p className="text-surface-400 mb-6">{t('desc')}</p>

      <Tabs
        tabs={[
          { id: 'new', label: t('tabNew') },
          { id: 'existing', label: t('tabExisting') },
          { id: 'gitlab', label: t('tabGitlab') },
        ]}
      >
        {(activeTab) => (
          <>
            {activeTab === 'new' && (
              <div className="space-y-4">
                <StepCard number={1} title={t('newStep1')}>
                  <CodeBlock code="mkdir my-project && cd my-project" />
                </StepCard>
                <StepCard number={2} title={t('newStep2')}>
                  <CodeBlock code="git init" />
                </StepCard>
                <StepCard number={3} title={t('newStep3')}>
                  <CodeBlock code="claude" />
                </StepCard>
                <StepCard number={4} title={t('newStep4')} description={t('newStep4Desc')} />
                <StepCard number={5} title={t('newStep5')} description={t('newStep5Desc')} />
                <StepCard number={6} title={t('newStep6')} description={t('newStep6Desc')} />
                <StepCard number={7} title={t('newStep7')} description={t('newStep7Desc')}>
                  <CodeBlock
                    code={`git add -A
git commit -m "Initial project setup with CLAUDE.md"
git remote add origin https://gitlab.company.com/your-group/project-name.git
git push -u origin main`}
                  />
                </StepCard>

                <div className="rounded-xl bg-accent-500/10 border border-accent-500/20 p-5 mt-6">
                  <h4 className="flex items-center gap-2 font-semibold text-accent-300 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-accent-400">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
                    </svg>
                    {t('frameworkTitle')}
                  </h4>
                  <p className="text-sm text-accent-200/70 mb-3">{t('frameworkDesc')}</p>
                  <CodeBlock code={PROMPTING_FRAMEWORK} />
                </div>
              </div>
            )}

            {activeTab === 'existing' && (
              <div className="space-y-4">
                <StepCard number={1} title={t('existingStep1')}>
                  <CodeBlock code="cd /path/to/your-project" />
                </StepCard>
                <StepCard number={2} title={t('existingStep2')} description={t('existingStep2Desc')}>
                  <CodeBlock code="git init" />
                </StepCard>
                <StepCard number={3} title={t('existingStep3')}>
                  <CodeBlock code="claude" />
                </StepCard>
                <StepCard number={4} title={t('existingStep4')}>
                  <CodeBlock code={ANALYZE_PROMPT} />
                </StepCard>
                <StepCard number={5} title={t('existingStep5')} description={t('existingStep5Desc')} />
                <StepCard number={6} title={t('existingStep6')} description={t('existingStep6Desc')}>
                  <CodeBlock
                    code={`git add CLAUDE.md
git commit -m "Add CLAUDE.md project documentation"
git remote add origin https://gitlab.company.com/your-group/project-name.git
git push -u origin main`}
                  />
                </StepCard>
              </div>
            )}

            {activeTab === 'gitlab' && (
              <div className="space-y-4">
                <StepCard number={1} title={t('gitlabStep1')} description={t('gitlabStep1Desc')}>
                  <CodeBlock code="git clone https://gitlab.company.com/your-group/project-name.git" />
                </StepCard>
                <StepCard number={2} title={t('gitlabStep2')}>
                  <CodeBlock code="cd project-name" />
                </StepCard>
                <StepCard number={3} title={t('gitlabStep3')}>
                  <CodeBlock code="claude" />
                </StepCard>
                <StepCard number={4} title={t('gitlabStep4')}>
                  <CodeBlock code={ANALYZE_PROMPT} />
                </StepCard>
                <StepCard number={5} title={t('gitlabStep5')}>
                  <CodeBlock
                    code={`git add CLAUDE.md
git commit -m "Add CLAUDE.md project documentation"
git push`}
                  />
                </StepCard>
              </div>
            )}
          </>
        )}
      </Tabs>

      <div className="mt-8 rounded-2xl glass-strong overflow-hidden">
        <Accordion title={t('templateTitle')}>
          <p className="mb-3">{t('templateDesc')}</p>
          <CodeBlock code={CLAUDE_MD_TEMPLATE} />
        </Accordion>
      </div>
    </section>
  );
}
